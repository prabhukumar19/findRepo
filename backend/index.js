const express = require('express');
const app = express();








app.listen(process.env.PORT||5000,()=>{

    console.log(`Server is start on http://localhost:${process.env.PORT||5000}`);
});