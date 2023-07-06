function factoryObject(firstName, lastName, age) {
  let person = {
    firstName,
    lastName,
    age,
  };

  return person;
}
console.log(factoryObject("Peter", "Pan", "20"));
