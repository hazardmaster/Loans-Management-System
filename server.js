const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	
	const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
	
});

const port = 5000;

app.listen(port, ()=>{
	console.log(`Server Started on port ${port}`);
});