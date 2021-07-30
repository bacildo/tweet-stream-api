require("dotenv").config();
const twitterClient = require("./init");

/*retweeta as mensagens de acordo com o id passado, caso haja falha na requisição, o erro retorna no console. Além do método
passado pela dependência, é possível realizar buscas/ações pelos métodos default da dependência*/
twitterClient.tweets
  .search({
    q: "#apibotbacildo",
    result_type: "recent",
    count: 20,
  })
  .then((response) => {
    if (response.statuses) {
      response.statuses.forEach((status) => {
        twitterClient.tweets
          .statusesRetweetById({
            id: status.id_str,
          })
          .then((resp) => console.log(`Retweeted #${status.id}`))
          .catch((err) => console.error(err));
      });
    }
  })
  .catch((err) => console.error(err));
