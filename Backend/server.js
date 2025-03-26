require('dotenv').config();
const app = require('./src/app');


//This callback function run when the server gets started
app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000')
});