const users = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "gender": "Male"
    },
    {
      "firstName": "Alice",
      "lastName": "Smith",
      "age": 28,
      "gender": "Female"
    },
    {
      "firstName": "Michael",
      "lastName": "Johnson",
      "age": 35,
      "gender": "Male"
    },
    {
      "firstName": "Emily",
      "lastName": "Brown",
      "age": 25,
      "gender": "Female"
    },
    {
      "firstName": "David",
      "lastName": "Wilson",
      "age": 32,
      "gender": "Male"
    },
    {
      "firstName": "Sarah",
      "lastName": "Anderson",
      "age": 29,
      "gender": "Female"
    },
    {
      "firstName": "James",
      "lastName": "Lee",
      "age": 27,
      "gender": "Male"
    },
    {
      "firstName": "Jessica",
      "lastName": "Davis",
      "age": 31,
      "gender": "Female"
    },
    {
      "firstName": "Daniel",
      "lastName": "Miller",
      "age": 33,
      "gender": "Male"
    },
    {
      "firstName": "Olivia",
      "lastName": "Moore",
      "age": 26,
      "gender": "Female"
    }
  ]
  
  

/**
 * Arrays
 * 
 * 1. for loop
 * 2. forEach
 * 3. filter
 * 4. map
 * 5. reduce
 * 6. destructure
 * 7. spread
 */


// For Loop - log names
for(const user of users) {
  // console.log(user.firstName)
}

// For Each - log names 
users.forEach((user)=>{
  // console.log(user.firstName)
})

// Filter - log female names
const females = users.filter((user)=>{
   return user.gender == 'Female'
 })

// console.log(females)


// Map - get a list of only full names
const fullNames = users.map((user)=>{
  const obj= {
    firstName: user.firstName,
    lastName:user.lastName,
    hasGraduated: true
  }
  return obj;
})

// console.log(fullNames)


// Wes Bos - array cardio

// Reduce - return a total of all ages - accumulator
const ageTotal = users.reduce((acc, user)=>{
  acc.totalCount = acc.totalCount + user.age
  return acc;
}, {totalCount:0})

console.log(ageTotal) 

// Desctructure - show first Two users



// Spread - copy the array, then copy while adding a new user
const usersV2 = [...users, {firstName:'Danny'}]

console.log(usersV2)

