

class Payment {
    constructor(page) {
      this.page = page;
      this.Payments = page.getByRole('link', { name: 'Payments' })
      this.NewPaymentsButton = page.getByRole('button', { name: 'Record payment (Alt Shift N)' })
      this.SelectInvoice = page.getByRole('button', { name: 'Select an invoice' })
      this.WOrkOrderName = page.getByText('GG · GOML · due 28 Sept')
      this.UseInvoiceButton = page.getByRole('button', { name: 'Use this invoice' })
      this.PaymentMethod = page.locator('.ant-select.ant-select-lg > .ant-select-suffix > svg')
      this.SelectPaymentMethod = page.locator('[id="_r_c4__list_1"]');
      this.RefNumber = page.getByRole('textbox', { name: 'e.g. BEFTN/26/' })
      this.RemarkText = page.locator('.tiptap')
      this.SubmitPayment = page.getByRole('button', { name: 'Record payment', exact: true })
    }

    async goto() {
      await this.Payments.click();
    }

    async CreateInvoiceButton() {
      await this.NewPaymentsButton.click();
    }

    async NewInvoice() {
   
      await this.SelectInvoice.click()
      await this.WOrkOrderName.click()
      await this.UseInvoiceButton.click()
      await this.PaymentMethod.click()
      await this.SelectPaymentMethod.click()
      await this.RefNumber.fill('123456768')
      await this.RemarkText.fill('testing')
      await this.SubmitPayment.click()
    }
 
}

module.exports = Payment;