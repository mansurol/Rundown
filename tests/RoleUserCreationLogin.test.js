import { test, expect } from "@playwright/test";
import Login from "../pages/Auth/Login";
import RolesCreate from "../pages/Roles/RolesCreate";
import NewUserCreate from "../pages/User/NewUserCreate";
import Logout from "../pages/Auth/LogOut";

require("dotenv").config();

test("CreateRoles", async ({ page }) => {
  const login = new Login(page);
  const rolesCreate = new RolesCreate(page);
  const userCreate = new NewUserCreate(page);
  const logout = new Logout(page);

  await page.goto(process.env.Url);

  //Login
  await login.fillEmail(process.env.Email);
  await login.fillPassword(process.env.password);
  await login.clickSignInButton();

  //Navigate to rolesCreate page
  await rolesCreate.goto();
  await rolesCreate.CreateRolesButton();
  await rolesCreate.CreateRoles(process.env.RoleName);

  //UserCreation
  await userCreate.goto();
  await userCreate.CreateUserButton();
  await userCreate.CreateUser(
    process.env.name,
    process.env.mail,
    process.env.pass,
    process.env.repass,
    process.env.roleName,
  );

  //Logout
  await logout.logout();
});
