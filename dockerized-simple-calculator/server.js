const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to requests at http://localhost:${port}...`);
});

module.exports = { app };
