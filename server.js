const { GraphQLServer, PubSub } = require('graphql-yoga');
require('dotenv').load()
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_STRING);

const Message = mongoose.model("Message",{
  user: String,
  content: String,
});
const model = Message.find()
const messages =  model

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    postMessage(user: String!, content: String!): ID!
  }

  type Subscription {
    messages: [Message!]
  }
`
const subscribers = []
const onMessagesUpdates = (fn) => subscribers.push(fn)

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: async (parent, {user, content}) => {
      const message = new Message({user, content})
      await message.save()
      subscribers.forEach((fn) => fn())
      return message
    }
  },
  Subscription: {
    messages: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2,15)
        onMessagesUpdates(() => pubsub.publish(channel, { messages }))
        setTimeout(() => pubsub.publish(channel, { messages }, 0))
        return pubsub.asyncIterator(channel)
      }
    }
  }
}

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

mongoose.connection.once("open", function(){
  server.start(({port}) => {
      console.log(`Server on http://localhost:${port}/`)
  })
});