const { expect } = require("@playwright/test");

class CreateInvoice {
  constructor(page) {
    this.page = page;
    this.InvoicePage = page
      .getByRole("complementary")
      .getByRole("link", { name: /^Invoices/ });
    this.NewInvoicesButton = page.getByRole("button", { name: /^New Invoice/ });
    this.SearchWorkOrder = page.getByRole("textbox", {
      name: "Search by work order, client",
    });
    this.UseWorkOrderButton = page.getByRole("button", {
      name: "Use work order",
    });
    this.InvoiceDatecalender = page.getByRole("button", {
      name: "Invoice date",
    });
    this.InvoiceDates = page.getByRole("button", { name: "20 October" });

    this.InvoiceDueDatecalender = page.getByRole("button", {
      name: "Due date",
    });
    this.InvoiceDueDate = page.getByRole("button", { name: "31 October" });
    this.RemarksButton = page.getByRole("paragraph").filter({ hasText: /^$/ });
    this.SaveInvoice = page.getByRole("button", { name: "Save invoice" });
    this.SubmitInvoice = page
      .getByRole("button", { name: "Submit invoice" })
      .first();
    this.FinalSubmitInvoice = page.getByRole("button", {
      name: "Submit",
      exact: true,
    });
    this.SubmittedInvoice = page
      .getByRole("link", { name: /INV-.*Submitted/ })
      .first();
    this.downloadInvoice = page.getByRole("button", { name: "Download PDF" });
    this.FinalDownload = page
      .getByRole("contentinfo")
      .getByRole("button", { name: "Download PDF" });
  }

  async goto() {
    await this.InvoicePage.click();
  }

  async CreateInvoiceButton() {
    await this.NewInvoicesButton.click();
  }

  async NewInvoice(ProjectName) {
    await this.SearchWorkOrder.fill(ProjectName);
    const workOrder = this.page.getByText(ProjectName, { exact: false });
    await expect(workOrder).toBeVisible();
    await workOrder.click();
    await this.UseWorkOrderButton.click();
    await this.InvoiceDatecalender.click();
    await this.InvoiceDates.click();
    await this.InvoiceDueDatecalender.click();
    await this.InvoiceDueDate.click();
    await this.RemarksButton.fill("Testing remark");
    await this.SaveInvoice.click();
  }
  async SumitInvoice() {
    await this.SubmitInvoice.click();
    await this.FinalSubmitInvoice.click();
  }

  async DownloadPDF() {
    await this.downloadInvoice.click();
    await this.FinalDownload.click();
  }
}

module.exports = CreateInvoice;
