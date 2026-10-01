import { test, expect } from "@playwright/test";
import UserLogin from "../pages/Auth/NewUserLogin";
import dotenv from "dotenv";
dotenv.config();
test("NewLogin", async ({ page }) => {
  const newLogin = new UserLogin(page);
  await page.goto(process.env.Url);

  await newLogin.fillmail(process.env.Nmail);
  await newLogin.fillPass(process.env.Npass);
  await newLogin.clickSignInButton();
});
