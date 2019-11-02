const axios = require('axios');


async function getUser() {
   const res = await axios.get('https://api.github.com/users/sushmeet');
   return res;
}


async function getStuff() {
    const value = await getUser();
    console.log('value------', value.data);
}




getStuff()