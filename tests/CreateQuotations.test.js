import { test, expect } from '@playwright/test';
import Login from '../pages/Auth/Login'
import Quotation from '../pages/Quotations/CreateQuotations'
require('dotenv').config();


test('CreateQuotations', async ({ page }) => {

   const quotations = new Quotation(page);
   const login = new Login(page);

   await page.goto(process.env.Url);
   
   //Login
   await login.fillEmail(process.env.Email);
   await login.fillPassword(process.env.password);
   await login.clickSignInButton();

//Navigate to Quotations page
   await quotations.goto();
   await quotations.CreateQuotations();
   await quotations.NewQuotationForm(process.env.ProjectName,process.env.GroupTitle,process.env.ItemnameOne,process.env.UnitPrices,process.env.ItemNameTwo,process.env.ItemNameThree,process.env.termsConditions,process.env.AgencyFees,process.env.discount,process.env.vatValues,process.env.dayCompleteInput);
   

});

