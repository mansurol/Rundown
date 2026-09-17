class  EditProjects {
    constructor(page) {
      this.page = page;
      this.ProjectPage = page.getByRole('link', { name: 'Projects' })
      this.ProjectEDModal = page.getByRole('button').filter({ hasText: /^$/ }).nth(3)
      this.ProjecteditForm = page.getByText('Edit')
      this.PName = page.getByRole('textbox', { name: 'Enter project name' })
      this.PType = page.getByRole('button', { name: 'Regular' })
      this.Pbrief = page.getByText('iuwidrhwqhrfui huihweihrweh')
      this.PSave = page.getByRole('button', { name: 'Save changes' })
     
    }

      async goto() {
      await this.ProjectPage.click();
  }
   

      async ProjectEdit(EProjectName, EProjectBrief) {
        await this.ProjectEDModal.click();
        await this.ProjecteditForm.click();
        await this.PName.fill(EProjectName);
        await this.PType.click();
        await this.Pbrief.fill(EProjectBrief);
        await this.PSave.click();

      
  }

    
 

  }
  
  module.exports = EditProjects;