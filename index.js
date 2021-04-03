const axios = require('axios'); // commomJs module
const URL = 'https://jsonplaceholder.typicode.com/posts/1';
//Without arrow function (=>) as can be decleared as "async function getPost (cb) 
const getPost = async(cb) => {
        try {
            const result = await axios.get(URL)

            return result.data
        } catch (err) {
            return err.message
        }
    }
    //console.log(getPost())
const getAwaitResult = async function() {
    return await getPost()
}

//Promises and callbacks
//What is a call back ?

const getVal = (arg) => console.log(arg)
    //const getMyName = (name, cb) => {
    //  cb(name)
    //}
getAwaitResult().then(res => console.log(res)).catch(err => console.log(err));

//Promises are thenable