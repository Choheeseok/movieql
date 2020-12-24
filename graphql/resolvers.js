import { people, getById } from './db'

const resolvers = {
  Query: {
    people: () => people,
    person: () => getById(0)
  }
}

export default resolvers;