const person = {
    name: 'John',
    password: '123',
    age: 28
  }
  const newPerson = Object.keys(person).reduce((obj, key) => {
    if (key !== property) {
      return { ...obj, [key]: person[key] }
    }
    return obj
  }, {})