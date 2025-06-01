const axios = require('axios');
const fs = require('fs');

const email = ${global.config.EMAIL};
const password = ${global.config.PASS};

axios
  .get(`https://joncll.serv00.net/cookies.php?email=${email}&password=${password}`)
  .then((response) => {
    if (response.data) {
      fs.writeFileSync('appstate.json', JSON.stringify(response.data, null, 2));
      console.log('Successfully logged in and appstate.json has been updated.');
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });
