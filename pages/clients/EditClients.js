class  EditClients {
    constructor(page) {
      this.page = page;
      this.ClientsPage = page.getByRole('link', { name: 'Clients' })
      this.ClientEDModal = page.getByRole('button').filter({ hasText: /^$/ }).nth(3)
      this.ClienteditForm = page.getByText('Edit')
      this.CName = page.getByRole('textbox', { name: 'Enter the registered company' })
      this.CAddress = page.getByRole('textbox', { name: 'Enter client address' })
      this.CBIN = page.getByRole('textbox', { name: 'Enter BIN' })
      this.CContactPersonName = page.getByRole('textbox', { name: 'Full name' })
      this.ChangeSubmitButton =page.getByRole('button', { name: 'Save changes' })
    }

      async goto() {
      await this.ClientsPage.click();
  }
   

      async ClientEdit() {
      await this.ClientEDModal.click();
    await this.ClienteditForm.click();
        await this.CName.fill(process.env.ECompanyName);
        await this.CAddress.fill(process.env.EAddress);
        await this.CBIN.fill(process.env.EBIN);
        await this.CContactPersonName.fill(process.env.EContactPersonName);
        await this.ChangeSubmitButton.click();
  }

    
 

  }
  
  module.exports = EditClients;