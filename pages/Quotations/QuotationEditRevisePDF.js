class QuotationEditRevisePDF {
    constructor(page) {
      this.page = page;
      this.QuotationsPage = page.getByRole('link', { name: 'Quotations' });
      this.SingleQuotationLink = page.getByRole('link', { name: 'Mavi' })
      this.EditQuotation = page.getByRole('button', { name: 'Edit' })
      this.UnitPrice = page.locator('input[name="items.0.unitPrice"]')
      this.SaveButton = page.getByRole('button', { name: 'Save quotation' })
      this.RevisePDFButton = page.getByRole('button', { name: 'Revise' })
      this.ReviseReason = page.getByRole('textbox', { name: 'e.g. Client requested an' })
      this.ReviseDayToCompletedate = page.locator('input[name="daysToComplete"]')
      this.SaveChangesButton = page.getByRole('button', { name: 'Save changes' })
      this.CreateVersionButton = page.getByRole('button', { name: 'Create version' })
      this.ApproveButton = page.getByRole('button', { name: 'Approve' })
      this.finalApproveButton = page.getByRole('dialog').getByRole('button', { name: 'Approve' })

      this.DownloadPDFButton = page.getByRole('button', { name: 'Download PDF' })
      this.FinalDownloadPDF = page.getByLabel('PDF optionsChoose a template').getByRole('button', { name: 'Download PDF' })
    }

    async goto() {
      await this.QuotationsPage.click();
    }

    async SingleQuotation() {
      await this.SingleQuotationLink.click();
    }

 
  async editQuotationForm() {
        await this.EditQuotation.click();
        await this.UnitPrice.fill('9999');
        await this.SaveButton.click();
        await this.RevisePDFButton.click();
        await this.ReviseReason.fill('Day Update');
        await this.ReviseDayToCompletedate.fill('29');
        await this.SaveChangesButton.click();
        await this.CreateVersionButton.click();
        await this.ApproveButton.click();
        await this.finalApproveButton.click();
  }


   async DownloadPDF() {
      await this.DownloadPDFButton.click();
      await this.FinalDownloadPDF.click()

    }
}
  module.exports = QuotationEditRevisePDF;