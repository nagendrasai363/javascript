const brainstormDinner = require("./awaitOperatorLibrary");

//Native promise version
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I am going to make ${meal} for dinner.`);
  });
}

//async/await version
async function announceDinner() {
  // Write your code below:
  let dinner = await brainstormDinner();
  console.log(`I'm going to make ${dinner} for dinner.`);
}

announceDinner();
