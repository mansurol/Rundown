class NewUserCreate {
  constructor(page) {
    this.page = page;
    this.Users = page.getByRole("link", { name: "User" });
    this.NewUserButton = page.getByRole("button", {
      name: "New user (Alt Shift N)",
    });
    this.Name = page.getByRole("textbox", { name: "e.g. Ayesha Siddiqua" });
    this.Email = page.getByRole("textbox", { name: "name@co.design" });
    this.Password = page.getByRole("textbox", { name: "Enter a password" });
    this.RePassword = page.getByRole("textbox", {
      name: "Re-enter the password",
    });
    this.SetRole = page.getByText("Admin", { exact: true });
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
    await this.page.getByText(roleName, { exact: true }).click();
    await this.SubmitButton.click();
  }
}

module.exports = NewUserCreate;
