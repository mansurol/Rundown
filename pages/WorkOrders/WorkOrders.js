const path = require("path");
const { expect } = require("@playwright/test");
class CreateWorkOrder {
  constructor(page) {
    this.page = page;
    this.WorkOrderPage = page.getByRole("link", {
      name: "Work orders",
      exact: true,
    });
    this.SearchWorkOrder = page.getByRole("textbox", {
      name: "Search by client, project or",
    });
    this.ProjectEditBtn = page.getByRole("button", { name: "Edit" });
    this.NewWorkOrderButton = page.getByRole("button", {
      name: /^New Work Order/,
    });
    this.SearchQuotation = page.getByRole("textbox", {
      name: "Search by quotation, project",
    });

    this.SelectQuotationButton = page.getByRole("button", {
      name: "Use quotation",
    });
    this.WorkOrderdateCalender = page.getByRole("button", {
      name: "Work order date",
    });
    this.AddWorkOrderDate = page.getByRole("button", { name: "20 October" });
    this.ReceivedFromClient = page.getByRole("button", {
      name: "Received from client Optional",
    });
    this.WorkOrderReceivedDate = page.getByRole("button", {
      name: "21 October",
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
    this.PaymentDateCalender = page.getByRole("button", {
      name: "Milestone 1 due date",
    });
    this.AddPaymentDate = page.getByRole("button", { name: "20 October" });

    this.paymentMilestoneTwo = page.getByRole("button", {
      name: "Add milestone",
    });
    this.PaymentSheduleTwo = page.getByRole("textbox", {
      name: "Milestone 2 name",
    });
    this.PaymentPersentangTwo = page.getByRole("spinbutton", {
      name: "Milestone 2 share",
    });
    this.PaymentDateCalenderTwo = page.getByRole("button", {
      name: "Milestone 2 due date",
    });
    this.AddPaymentDateTwo = page.getByRole("button", { name: "26 October" });

    this.paymentMilestoneThree = page.getByRole("button", {
      name: "Add milestone",
    });
    this.PaymentSheduleThree = page.getByRole("textbox", {
      name: "Milestone 3 name",
    });
    this.PaymentPersentangThree = page.getByRole("spinbutton", {
      name: "Milestone 3 share",
    });
    this.PaymentDateCalenderThree = page.getByRole("button", {
      name: "Milestone 3 due date",
    });
    this.AddPaymentDateThree = page.getByRole("button", { name: "27 October" });

    this.RaiseWorkOrder = page.getByRole("button", {
      name: "Raise work order",
    });
    this.ApproveWorkOrder = page.getByRole("button", { name: "Approve" });
    this.FinalApproveWorkOrder = page
      .getByRole("dialog")
      .getByRole("button", { name: "Approve" });

    this.SaveChange = page.getByRole("button", {
      name: "Save changes",
    });
  }

  async goto() {
    await this.WorkOrderPage.click();
  }

  async CreateWorkOrderButton() {
    await this.NewWorkOrderButton.click();
  }

  async NewworkOrder(ProjectName) {
    await this.SearchQuotation.fill(ProjectName);
    const SelectQuotation = this.page.getByRole("radio", {
      name: ProjectName,
    });
    await expect(SelectQuotation).toBeVisible();
    await SelectQuotation.click();
    await expect(this.SelectQuotationButton).toBeEnabled();
    await this.SelectQuotationButton.click();
    await this.WorkOrderdateCalender.click();
    await this.AddWorkOrderDate.click();
    await this.ReceivedFromClient.click();
    await this.WorkOrderReceivedDate.click();
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

  async EdtWorkOrder(ProjectName) {
    await this.SearchWorkOrder.fill(ProjectName);
    const SelectProject = this.page.getByRole("link", {
      name: ProjectName,
    });
    await SelectProject.click();
    await this.ProjectEditBtn.click();
    await this.PaymentPersentangTwo.fill("25");
    await this.paymentMilestoneThree.click();
    await this.PaymentSheduleThree.fill("3rd");
    await this.PaymentPersentangThree.fill("25");
    await this.PaymentDateCalenderThree.click();
    await this.AddPaymentDateThree.click();
    await this.SaveChange.click();
  }
}

module.exports = CreateWorkOrder;
