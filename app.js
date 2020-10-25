const { default: cosmosServer } = require("@zeit/cosmosdb-server");
const PORT = process.env.PORT || 3000;

cosmosServer({}).listen(PORT, () => {
  console.log(`Cosmos DB server running at https://localhost:3000`);
});
