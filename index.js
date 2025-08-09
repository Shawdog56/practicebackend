import express from 'express';

const PORT = process.env.PORT;
const App = express();

App.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});