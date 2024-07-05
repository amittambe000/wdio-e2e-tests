import { Given } from "@wdio/cucumber-framework";

Given(/^Login to inventory app$/, async function () {
  await browser.url("https://www.saucedemo.com");
  await browser.setTimeout({ implicit: 15000, pageLoad: 7000 });
  await $(`#user-name`).setValue("standard_user");
  await $(`#password`).setValue("secret_sauce");
  await $(`#login-button`).click();
});
