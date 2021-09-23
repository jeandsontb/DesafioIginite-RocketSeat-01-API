const app = require('./index');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log('Server running and port 3300'));