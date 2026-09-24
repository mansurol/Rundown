class CreateNewProject {
    constructor(page) {
      this.page = page;
      this.ProjectsPage = page.getByRole('link', { name: 'Projects' });
        this.NewProjectButton = page.getByRole('button', { name: 'New Project (Alt Shift N)' });
        this.ClientModal = page.locator('.ant-input-affix-wrapper.ant-input-affix-wrapper-lg')
        this.SearchClient = page.getByRole('textbox', { name: 'Search by company name' })
        this.ClienSubmittButton= page.getByRole('button', { name: 'Use this client' })
        this.ProjectNameInput = page.getByRole('textbox', { name: 'Enter project name' });
        this.ProjectType = page.getByRole('button', { name: 'Retainer' })
        this.StartDateCalender = page.getByRole('textbox', { name: 'Select date' }).first()
        this.StartDate = page.getByText('17', { exact: true })
        this.EndDateCalender = page.locator('div:nth-child(2) > .ant-row > .ant-col.ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input')
        this.EndDate = page.getByText('30').nth(3)
        this.BriefDescription = page.locator('.tiptap');
        this.SubmitButton = page.getByRole('button', { name: 'Save project' });
    }

    async goto() {
      await this.ProjectsPage.click();
    }

    async createNewProject() {
      await this.NewProjectButton.click();
    }
  async NewProjectForm(projectName, EProjectBrief,CompanyName) {
      //await this.SelectClientButton.click();
      await this.ClientModal.click()
      const clientResult = this.page.getByText(CompanyName, { exact: false });
      await clientResult.waitFor({ state: 'visible' });
      await clientResult.click(); 
      await this.ClienSubmittButton.click();
      await this.ProjectNameInput.fill(projectName);
      await this.ProjectType.click();
      await this.StartDateCalender.click();
      await this.StartDate.click();
      await this.EndDateCalender.click();
      await this.EndDate.click();
      await this.BriefDescription.fill(EProjectBrief);
      await this.SubmitButton.click();
    }

  
  }

  module.exports = CreateNewProject;