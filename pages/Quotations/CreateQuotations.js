const { expect } = require("@playwright/test");

class CreateQuotations {
  constructor(page) {
    this.page = page;
    this.QuotationsPage = page
      .getByRole("menuitem", { name: "Quotations" })
      .getByRole("link");
    this.NewQuotationButton = page.getByRole("button", {
      name: /^New Quotation/,
    });
    this.SelectClientModal = page.getByRole("button", { name: "Client" });
    this.SearchClientName = page.getByRole("textbox", {
      name: "Search by company name",
    });

    this.ClienSelectButton = page.getByRole("button", { name: "Use client" });
    this.SaveWithoutProject = page.getByRole("checkbox", {
      name: "Save without a project",
    });
    this.QuotationDateCalender = page.getByRole("textbox", {
      name: "Quotation date",
    });
    this.QuotationDate = page.getByText("21", { exact: true });
    this.TeamName = page.getByRole("button", { name: "Creative" });

    this.CurrencyName = page.getByRole("combobox", { name: "Currency" });
    this.SelectCurrencyButton = page.getByText("EURO — Euro");

    this.dayToCompleteSwitch = page.getByRole("switch", {
      name: "Show days to complete",
    });
    this.dayToCompleteInput = page.locator('input[name="daysToComplete"]');

    this.GroupTitleInput = page.getByRole("textbox", { name: "Group title" });
    this.ItemOneTitle = page.getByRole("textbox", { name: "Item name" });
    this.UnitPrice = page.getByRole("spinbutton", { name: "Unit price" });
    this.QTY = page.getByRole("spinbutton", { name: "Qty" });
    this.ItemTwo = page.getByRole("button", { name: "Add item" });
    this.ItemTwoName = page.getByRole("textbox", { name: "Item name" }).nth(1);
    this.TermsAndConditions = page.locator(".tiptap");
    this.AgencyFee = page.locator('input[name="afs"]');
    this.discountAmount = page.locator('input[name="discountAmount"]');
    this.vatValue = page.locator('input[name="vatValue"]');
    this.SaveButton = page.getByRole("button", { name: "Save quotation" });
    this.SendQButton = page.getByRole("button", { name: "Mark as sent" });
    this.FinalSentQButton = page.getByRole("button", {
      name: "Sent Quotation",
    });
    this.ApproveQButton = page.getByRole("button", { name: "Approve" });
    this.FinalApproveQButton = page
      .getByRole("dialog")
      .getByRole("button", { name: "Approve" });
  }

  async goto() {
    await this.QuotationsPage.click();
  }

  async CreateQuotations() {
    await this.NewQuotationButton.click();
  }

  async NewQuotationForm(
    ProjectName,
    GroupTitle,
    ItemNameTwo,
    termsConditions,
    AgencyFees,
    discount,
    vatValues,
  ) {
    await this.SelectClientModal.click();
    await this.SearchClientName.fill(ProjectName);
    const Project = this.page.getByRole("radio", {
      name: new RegExp(`^${ProjectName}\\b`),
    });
    await expect(Project).toBeVisible();
    await Project.click();
    await this.ClienSelectButton.click();
    await this.SaveWithoutProject.click();
    await this.QuotationDateCalender.click();
    await this.QuotationDate.click();
    await this.TeamName.click();
    await this.CurrencyName.click();
    await this.SelectCurrencyButton.click();
    await this.dayToCompleteSwitch.click();
    await this.dayToCompleteInput.fill("20");

    await this.GroupTitleInput.fill(GroupTitle);
    await this.ItemOneTitle.fill("design and development");
    await this.UnitPrice.fill("100");
    await this.QTY.fill("2");
    await this.ItemTwo.click();
    await this.ItemTwoName.fill(ItemNameTwo);

    await this.TermsAndConditions.fill(termsConditions);
    await this.AgencyFee.fill(AgencyFees);
    await this.discountAmount.fill(discount);
    await this.vatValue.fill(vatValues);
    await this.SaveButton.click();
    await this.SendQButton.click();
    await this.FinalSentQButton.click();
    await this.ApproveQButton.click();
    await this.FinalApproveQButton.click();
  }
}
module.exports = CreateQuotations;
