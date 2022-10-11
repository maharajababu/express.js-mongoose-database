import person from './schema.js';

export default async function workingWithModel(){
  
    try
    {

      const personParis = await person.create({ 
        name: "Paris", 
        age: "19",
        email: "com@gmail.com",

      });
        //await personParis.save();
        console.log(personParis);
        console.log("Working with model is completed");

      }
    catch(e)
    {
      console.log("There is error while working with model: ", e.message);
    }
  
  }