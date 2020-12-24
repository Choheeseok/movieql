export const people = [
  {
    id:1,
    name: "nicolas",
    age: 18,
    gender: "female"
  },
  {
    id:2,
    name: "asbd",
    age: 28,
    gender: "female"
  },
  {
    id:3,
    name: "zxcv",
    age: 48,
    gender: "female"
  },
  {
    id:4,
    name: "qwer",
    age: 68,
    gender: "female"
  }
];

export const getById = (id) => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0]
}