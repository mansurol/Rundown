class NewUserCreate {
  constructor(page) {
    this.page = page;
    this.Users = page.getByRole("link", { name: "User" });
    this.NewUserButton = page.getByRole("link", {
      name: "New user (Alt Shift N)",
    });
    this.Name = page.getByRole("textbox", { name: "Full name" });
    this.Email = page.getByRole("textbox", { name: "Email (@co.design)" });
    this.Password = page.getByRole("textbox", { name: "Temporary password" });
    this.RePassword = page.getByRole("textbox", { name: "Confirm password" });
    this.SubmitButton = page.getByRole("button", { name: "Create user" });
  }

  async goto() {
    await this.Users.click();
  }

  async CreateUserButton() {
    await this.NewUserButton.click();
  }
  async CreateUser(name, mail, pass, repass, roleName) {
    await this.Name.fill(name);
    await this.Email.fill(mail);
    await this.Password.fill(pass);
    await this.RePassword.fill(repass);
    const SetRole = this.page.getByRole("checkbox", {
      name: roleName,
    });
    await SetRole.click();
    await this.SubmitButton.click();
  }
}

module.exports = NewUserCreate;
