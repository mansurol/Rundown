const path = require("path");
const { expect } = require("@playwright/test");
class CreateWorkOrder {
  constructor(page) {
    this.page = page;
    this.WorkOrderPage = page.getByRole("link", {
      name: "Work orders",
      exact: true,
    });
    this.NewWorkOrderButton = page.getByRole("button", {
      name: /^New Work Order/,
    });
    this.SearchQuotation = page.getByRole("textbox", {
      name: "Search by quotation, project",
    });

    this.SelectQuotationButton = page.getByRole("button", {
      name: "Use quotation",
    });
    this.WorkOrderdateCalender = page.getByRole("textbox", {
      name: "Work order date",
    });
    this.ReceivedFromClient = page.getByRole("textbox", {
      name: "Received from client Optional",
    });
    this.FileInput = page.locator('input[type="file"]');
    this.PdfFile = path.resolve(
      __dirname,
      "../../fixtures/QUOTATION__Tech-2.pdf",
    );

    this.PaymentShedule = page.getByRole("textbox", {
      name: "Milestone 1 name",
    });
    this.PaymentPersentange = page.getByRole("spinbutton", {
      name: "Milestone 1 share",
    });
    this.PaymentDateCalender = page.getByRole("textbox", {
      name: "Milestone 1 due date",
    });
    this.AddPaymentDate = page.getByRole("cell", { name: "23" });

    this.paymentMilestoneTwo = page.getByRole("button", {
      name: "Add milestone",
    });
    this.PaymentSheduleTwo = page.getByRole("textbox", {
      name: "Milestone 2 name",
    });
    this.PaymentPersentangTwo = page.getByRole("spinbutton", {
      name: "Milestone 2 share",
    });
    this.PaymentDateCalenderTwo = page.getByRole("textbox", {
      name: "Milestone 2 due date",
    });
    this.AddPaymentDateTwo = page.getByRole("cell", {
      name: "30",
      description: "2026-09-30",
    });
    this.RaiseWorkOrder = page.getByRole("button", {
      name: "Raise work order",
    });
    this.ApproveWorkOrder = page.getByRole("button", { name: "Approve" });
    this.FinalApproveWorkOrder = page
      .getByRole("dialog")
      .getByRole("button", { name: "Approve" });
  }

  async goto() {
    await this.WorkOrderPage.click();
  }

  async CreateWorkOrderButton() {
    await this.NewWorkOrderButton.click();
  }

  async NewworkOrder(ProjectName) {
    await this.SearchQuotation.fill(ProjectName);
    const SelectQuotation = page.getByRole("radio", {
      name: ProjectName,
    });
    await expect(SelectQuotation).toBeVisible();
    await SelectQuotation.click();
    await expect(this.SelectQuotationButton).toBeEnabled();
    await this.SelectQuotationButton.click();
    await this.WorkOrderdateCalender.click();
    await this.page.getByRole("table").getByText("24", { exact: true }).click();
    await this.ReceivedFromClient.click();
    await this.page.getByRole("table").getByText("23", { exact: true }).click();
    await this.FileInput.setInputFiles(this.PdfFile);

    await this.PaymentShedule.fill("1st");
    await this.PaymentPersentange.fill("50");
    await this.PaymentDateCalender.click();
    await this.AddPaymentDate.click();
    await this.paymentMilestoneTwo.click();
    await this.PaymentSheduleTwo.fill("2nd");
    await this.PaymentPersentangTwo.fill("50");
    await this.PaymentDateCalenderTwo.click();
    await this.AddPaymentDateTwo.click();
    await this.RaiseWorkOrder.click();
    await this.ApproveWorkOrder.click();
    await this.FinalApproveWorkOrder.click();
  }
}

module.exports = CreateWorkOrder;
