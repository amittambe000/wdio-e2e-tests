import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
});

When(/Search with (.*)$/, async function (searchItem: string) {
  let element = await $(`[name=q]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (exepectedURL) {
  let actualURL = await browser.getUrl();
  expect(actualURL).to.equal(exepectedURL);
});

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("/dropdown");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
  /**
   *  Input Box
   */
  /*   let ele = $(`[type='number']`);
  await ele.setValue("12345"); */

  /**
   *  Drop DOwn
   */
  let el = await $(`#dropdown option[selected='selected']`);
  let actualTxt = await el.getText();
  expect(actualTxt).to.equal("Please select an option");

  let dropdownEls = await $$(`select > option`);
  let arr = [];
  for (let i = 0; i < dropdownEls.length; i++) {
    let el = dropdownEls[i];
    let value = await el.getText();
    arr.push(value);
    console.log(value);
  }
  console.log(`Drop down options ${arr}`);
});
