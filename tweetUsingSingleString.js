const twitterClient = require("./init");

// Uma forma de postar informações através de uma string de forma manual.

let tweet = "#Bbot é flamenguista!";
twitterClient.tweets
  .statusesUpdate({
    status: tweet,
    attachment_url: "https://twitter.com/i/status/1420899024601862150", //a URL precisa ser um permalink do domínio do twitter
  })
  .then((response) => {
    console.log("Tweet sent!", response);
  });
