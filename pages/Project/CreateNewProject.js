class CreateNewProject {
  constructor(page) {
    this.page = page;
    this.ProjectsPageNavigation = page
      .getByRole("menuitem", { name: "Projects" })
      .getByRole("link");

    this.NewProjectButton = page.getByRole("button", {
      name: "New Project (Alt Shift N)",
    });

    this.ClienSubmittButton = page.getByRole("button", { name: "Use client" });
    this.ProjectNameInput = page.getByRole("textbox", {
      name: "Project name",
    });
    this.ProjectType = page.getByRole("button", { name: "Retainer" });
    this.StartDateCalender = page.getByRole("button", { name: "Start date" });
    this.StartDate = page.getByRole("button", { name: "21 October" });
    this.EndDateCalender = page.getByRole("button", {
      name: "Expected end date",
    });
    this.EndDate = page.getByRole("button", { name: "27 October" });
    this.BriefDescription = page
      .getByRole("paragraph")
      .filter({ hasText: /^$/ });
    this.SubmitButton = page.getByRole("button", { name: "Save project" });
  }

  async goto() {
    await this.ProjectsPageNavigation.click();
  }

  async createNewProject() {
    await this.NewProjectButton.click();
  }
  async NewProjectForm(projectName, EProjectBrief, CompanyName) {
    const ClientSelect = this.page.getByRole("radio", {
      name: CompanyName,
    });
    await ClientSelect.click();
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
