const twitterClient = require("./init");

// Uma forma de postar informações através de uma string de forma manual.

let tweet = "#botApiTweeting";
twitterClient.tweets
  .statusesUpdate({
    status: tweet,
  })
  .then((response) => {
    console.log("Tweet sent!", response);
  });
