class Project {
    constructor(page) {
      this.page = page;
      this.ProjectsPage = page.getByRole('link', { name: 'Projects' });
      this.searchProjectInput = page.getByRole('textbox', { name: 'Search by client or project name' });
    }

    async goto() {
      await this.ProjectsPage.click();
    }

    async createProjects(searchProject) {
      await this.searchProjectInput.fill(searchProject);
    }
  }

  module.exports = Project;