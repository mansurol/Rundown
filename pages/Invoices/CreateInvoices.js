

class CreateInvoice {
    constructor(page) {
      this.page = page;
      this.InvoicePage = page.getByRole('complementary').getByRole('link', { name: /^Invoices/ });
      this.NewInvoicesButton = page.getByRole('button', { name: /^New Invoice/ });
      this.SelectWorkOrder = page.getByText('GG · GOMLWO-2026-00010ApprovedBDT')
      this.UseWorkOrderButton = page.getByRole('button', { name: 'Use this work order' })
      this.InvoiceDatecalender = page.getByRole('textbox', { name: 'Select date' }).nth(0)
      this.InvoiceDate = page.getByText('27')
      this.InvoiceDueDatecalender = page.getByRole('textbox', { name: 'Select date' }).nth(1)
      this.InvoiceDueDate =  page.getByRole('table').getByText('29')
      this.RemarksButton = page.getByRole('paragraph');
      this.SaveInvoice = page.getByRole('button', { name: 'Save invoice' })
      this.SubmitInvoice = page.getByRole('button', { name: 'Submit invoice' }).first()
      this.FinalSubmitInvoice = page.getByRole('button', { name: 'Submit', exact: true })
      this.SubmittedInvoice = page.getByRole('link', { name: /INV-.*Submitted/ }).first()
      this.downloadInvoice = page.getByRole('button', { name: 'Download PDF' })
      this.FinalDownload = page.getByLabel('PDF optionsChoose what').getByRole('button', { name: 'Download PDF' })
    }

    async goto() {
      await this.InvoicePage.click();
    }

    async CreateInvoiceButton() {
      await this.NewInvoicesButton.click();
    }

    async NewInvoice() {
   
      await this.SelectWorkOrder.click()
      await this.UseWorkOrderButton.click()  
      await this.InvoiceDatecalender.click()  
      await this.InvoiceDate.click()
      await this.InvoiceDueDatecalender.click()
      await this.InvoiceDueDate.click()
      await this.RemarksButton.fill('Remark')
      await this.SaveInvoice.click()
    
    }
    async SumitInvoice(){
      await this.SubmitInvoice.click()
      await this.FinalSubmitInvoice.click()
    }

    async DownloadPDF() {
      
      await this.downloadInvoice.click()
      await this.FinalDownload.click()
    }
}

module.exports = CreateInvoice;