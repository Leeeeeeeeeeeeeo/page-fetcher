const request = require('request');
const fs = require('fs'); 

 
 request(process.argv[2], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 

  fs.appendFile(process.argv[3], ('body:', body), function (err) {
    if (err) throw err;;
    console.log(`Downloaded and saved to ${process.argv[3]}`)
  });
   
});



