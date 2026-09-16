class  ClientsSearchFilter {
    constructor(page) {
      this.page = page;
      this.ClientsPage = page.getByRole('link', { name: 'Clients' })
      this.ClientSearch = page.getByRole('textbox', { name: 'Search by name, contact or' })
      this.filterClients = page.getByRole('combobox').first()
      this.ClentsStatusInactive = page.getByRole('option', { name: 'Inactive', exact: true })
      this.clearStatusFilter = page.locator('.ant-select-clear').first()
   }

async goto() {
      await this.ClientsPage.click();
  }
   
async searchClient(SeacrhProject) {
      await this.ClientSearch.fill(SeacrhProject);
}

async filterClient() {
      await this.filterClients.click();
      await this.ClentsStatusInactive.click();

      }

async clearFilter() {
      await this.clearStatusFilter.click();
      }


  }
  


  
    module.exports = ClientsSearchFilter;

  
  


