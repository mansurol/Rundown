import { test, expect } from '@playwright/test';
import Login from '../pages/Auth/Login'
import Clients from '../pages/clients/Clients'
import CreateNewProject from '../pages/Project/CreateNewProject'
import Quotation from '../pages/Quotations/CreateQuotations'
  


require('dotenv').config();


test('FullBusinessJourney', async ({ page }) => {
   const login = new Login(page);
   const clients = new Clients(page);
   const createNewProject = new CreateNewProject(page);
   const quotations = new Quotation(page);
   //Login
   
  await test.step('Login', async () => {

   await page.goto(process.env.Url);
   
   await login.fillEmail(process.env.Email);
   await login.fillPassword(process.env.password);
   await login.clickSignInButton();
  });


 //New Client Create

    await test.step('Create Client', async () => {

    await clients.goto();
    await clients.createClient(
      process.env.CompanyName,
      process.env.Address,
      process.env.TIN, 
      process.env.BIN,
      process.env.ContactPersonName,
      process.env.ContactPersonDesignation, 
      process.env.ContactPersonEmail,
      process.env.ContactPersonPhone,
      );

   });

   //Project Create

   await test.step('{ProjectCreate', async () => {

    await createNewProject.goto();
    await createNewProject.createNewProject();
    await createNewProject.NewProjectForm(process.env.ProjectName, process.env.EProjectBrief,process.env.CompanyName);
    

  });
   
 
 //QuotationCreate 

   await quotations.goto();
   await quotations.CreateQuotations();
   await quotations.NewQuotationForm(process.env.ProjectName,process.env.GroupTitle,process.env.ItemnameOne,process.env.UnitPrices,process.env.ItemNameTwo,process.env.ItemNameThree,process.env.termsConditions,process.env.AgencyFees,process.env.discount,process.env.vatValues,process.env.dayCompleteInput);


});