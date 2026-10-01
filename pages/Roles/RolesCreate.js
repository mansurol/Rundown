class RolesCreate {
  constructor(page) {
    this.page = page;
    this.Roles = page.getByRole("link", { name: "Roles" });
    this.NewRolesButton = page.getByRole("button", {
      name: "New role",
    });
  }

  async goto() {
    await this.Roles.click();
  }

  async CreateRolesButton() {
    await this.NewRolesButton.click();
  }

  async CreateRoles(roleName) {
    await this.page
      .getByRole("textbox", { name: "e.g. Production coordinator" })
      .fill(roleName);
    await this.page.getByRole("checkbox").first().check();
    //UserAccess
    await this.page.getByRole("checkbox").nth(0).check();
    await this.page.getByRole("checkbox").nth(1).check();
    await this.page.getByRole("checkbox").nth(2).check();
    await this.page.getByRole("checkbox").nth(3).check();

    //ClientAccess

    await this.page
      .locator("div:nth-child(5) > div:nth-child(2) > span > input")
      .check();
    await this.page
      .locator("div:nth-child(5) > div:nth-child(3) > span > input")
      .check();
    await this.page
      .locator("div:nth-child(5) > div:nth-child(4) > span > input")
      .check();
    await this.page
      .locator("div:nth-child(5) > div:nth-child(5) > span > input")
      .check();
    await this.page.getByRole("button", { name: "Create role" }).click();
  }
}

module.exports = RolesCreate;
