const axios = require('axios');

var data = JSON.stringify({
    "number": "5548999287996",
    "message": "xxx"
  });

  console.log(data)

    var config = {
      method: 'post',
      url: 'https://whatsappapi.soucannabis.ong.br/send-message',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });