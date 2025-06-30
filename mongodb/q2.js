// db.users.insertOne({name:"Prem",age:21})
// db.users.find()
// db.users.findOne()   - To find first document
// db.users.drop()  - To delete collection

db.users.insertOne({name: "Amy", age: 23});

db.users.insertMany([
    { name: "Shashank", age: 30 },
    { name: "Karthik", age: 25 },
]);