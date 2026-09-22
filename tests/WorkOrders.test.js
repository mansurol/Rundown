import { test } from '@playwright/test';
import Login from '../pages/Auth/Login'
import WorkOrder from '../pages/WorkOrders/WorkOrders'

require('dotenv').config();


test('Project', async ({ page }) => {

   const login = new Login(page);
   const workOrder = new WorkOrder(page);

   await page.goto(process.env.Url);
   
   //Login
   await login.fillEmail(process.env.Email);
   await login.fillPassword(process.env.password);
   await login.clickSignInButton();

//Navigate to Project page
   await workOrder.goto();
   await workOrder.CreateWorkOrderButton()
   await workOrder.NewworkOrder()

   



});