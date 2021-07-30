require("dotenv").config();
const twitterClient = require("./init");

/*retorna os últimos 15 tweets com a hashtag passada. Para aumentá-los,
basta passar o parâmetro count no método search com um valor até 100. 
os parametros do objeto são default da dependência*/
twitterClient.tweets
  .search({
    q: "#Flamengo",
    result_type: "recent",
    count: 20,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
