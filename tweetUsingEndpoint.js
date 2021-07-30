const twitterClient = require("./init");
const axios = require("axios");

// Uma forma de postar informações através de uma coleção de objetos recebidos pelo endpoint.
axios
  .get("http://history.muffinlabs.com/date/go")
  .then((response) => {
    const data = response.data.data ? response.data.data : {};
    let tweet;
    if (data.Events && data.Events.length) {
      tweet = "Year " + data.Events[200].year + " - " + data.Events[200].text;
    } else {
      tweet = "Nothing happened today :)";
    }

    twitterClient.tweets
      .statusesUpdate({
        status: tweet,
      })
      .then((response) => {
        console.log("Tweeted!", response);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
