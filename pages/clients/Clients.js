class  Clients {
    constructor(page) {
      this.page = page;
      this.ClientsPage = page.getByRole('link', { name: 'Clients' })
      this.CreateClient = page.getByRole('button', { name: /^New Client/ })
      this.InputCompanyName = page.getByRole('textbox', { name: 'Enter the registered company name' })
      this.InputAddress = page.getByRole('textbox', { name: 'Enter client address' })
      this.InputTIN = page.getByRole('textbox', { name: 'Enter TIN' })
      this.InputBIN = page.getByRole('textbox', { name: 'Enter BIN' })
      this.ContactPerson = page.getByRole('button', { name: 'Add contact' })
      this.ContactPersonName = page.getByPlaceholder('Full name')
      this.ContactPersonDesignation = page.getByRole('textbox', { name: 'e.g. Head of Marketing' })
      this.ContactPersonEmail = page.getByRole('textbox', { name: 'name@company.com' })
      this.ContactPersonPhone = page.getByRole('textbox', { name: '01XXXXXXXXX' })
      this.SaveButton = page.getByRole('button', { name: 'Save client' })
      this.ExportButton = page.getByRole('button', { name: 'Export', exact: true })
      
    }

      async goto() {
      await this.ClientsPage.click();
  }
   

      async createClient(CompanyName, Address, TIN, BIN, ContactPersonName, ContactPersonDesignation, ContactPersonEmail, ContactPersonPhone) {
      await this.CreateClient.click();
      await this.InputCompanyName.fill(CompanyName);
      await this.InputAddress.fill(Address);
      await this.InputTIN.fill(TIN);
      await this.InputBIN.fill(BIN);
      await this.ContactPersonName.fill(ContactPersonName);
      await this.ContactPersonDesignation.fill(ContactPersonDesignation);
      await this.ContactPersonEmail.fill(ContactPersonEmail);
      await this.ContactPersonPhone.fill(ContactPersonPhone);

      await this.SaveButton.click(); 
    
  }

        async exportClients() {
        await this.ExportButton.click();
      }
 

  }
  
  module.exports = Clients;