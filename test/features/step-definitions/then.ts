import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
  if (!noOfProducts) throw Error(`Invalid number provided: ${noOfProducts}`);
  let eleArr = await $$(`.inventory_item`);
  expect(eleArr.length).to.equal(parseInt(noOfProducts));
});

Then(/^Validate all the products price$/, async function () {
  let elePriceArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < elePriceArr.length; i++) {
    let price = await elePriceArr[i].getText();
    priceStrArr.push(price);
  }
  console.log(`Prices is ${priceStrArr}`);

  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  expect(priceNumArr.filter((ele) => ele <= 0).length).to.equal(0);
});
