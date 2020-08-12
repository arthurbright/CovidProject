const express = require('express');
const fs = require('fs').promises;


const app = express();
app.use(express.json());







app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
