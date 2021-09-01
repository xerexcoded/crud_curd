import { v4 as uuid } from 'uuid';
let users=[
 //let as we are changing the users within single session
]

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
 //spread all fields of user and add userid

    users.push({...user, id: uuid()});
    
    console.log(`User ${user.username} added to the database.`);
};
// /:id will hit any get request
// id is stored in the params {id :2}

export const getUser = (req, res) => {
    res.send(req.params.id)
};
//filter remove if condition is false

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};
//put method is to completely overwrite the users details in the database 
//patch is to update individual fields

export const updateUser =  (req,res) => {
    const { id } = req.params;
  const {firstName , lastName ,age} = req.body;

  const user = users.find((user) => user.id === id)
  if (firstName) user.firstName=firstName;
  if(age) user.age= age;
  if(lastName)  user.lastName=lastName;
  res.send(`user with id:${id} updated`);

 
    
};
