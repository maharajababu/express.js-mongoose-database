import person from './schema.js';

export default async function queryMyDatabase(id)
{
    try
    {
        const user = await person.findById(id);
        console.log("The user is: ", user);
    }
    catch(e)
    {
        console.log(e.message);
    }
}