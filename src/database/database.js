const db = require('electron-db');

db.createTable('history', (succ, msg) => {
    // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
}) 