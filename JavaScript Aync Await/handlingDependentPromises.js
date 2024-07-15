const {
  shopForBeans,
  soakTheBeans,
  cookTheBeans,
} = require("./handlingDependentPromisesLibrary");

async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(beanType);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
