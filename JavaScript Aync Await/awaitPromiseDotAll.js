let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./awaitPromiseDotAllLibraries");

async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);
  console.log(
    `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ad ${foodArray[3]}.`
  );
}

serveDinnerAgain();
