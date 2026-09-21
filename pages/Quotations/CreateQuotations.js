class CreateQuotations {
    constructor(page) {
      this.page = page;
      this.QuotationsPage = page.getByRole('link', { name: 'Quotations' });
      this.NewQuotationButton = page.getByRole('button', { name: /^New Quotation/ });
      this.ClientQuotationName = page.getByText('Mavii ')
      this.ClienSelectButton= page.getByRole('button', { name: 'Use this project' })
      this.QuotationDateCalender = page.getByRole('textbox', { name: 'Select date' })
      this.QuotationDate = page.getByText('24')
      this.dayToCompleteSwitch = page.getByRole('main').getByRole('switch')
      this.dayToCompleteInput = page.locator('input[name="daysToComplete"]')
      this.SelectCurrencyButton = page.locator('div').filter({ hasText: /^Select currency$/ }).nth(3)
      this.CurrencyName = page.getByText('BDT — Bangladeshi Taka')
      this.GroupTitleInput = page.getByRole('textbox', { name: 'e.g. Design' })
      this.ItemOne = page.getByRole('button', { name: 'Add item' })
      this.UnitPrice = page.locator('input[name="items.0.unitPrice"]')
      this.ItemOneName = page.locator('input[name="items.0.itemTitle"]')
      this.ItemTwo = page.getByRole('button', { name: 'Add item' })
      this.ItemTwoName = page.locator('input[name="items.1.itemTitle"]')
      this.ItemThreeName = page.locator('input[name="items.2.itemTitle"]')
      this.TermsAndConditions = page.locator('.tiptap')
      this.AgencyFee = page.locator('input[name="afs"]')
      this.discountAmount = page.locator('input[name="discountAmount"]')
      this.vatValue = page.locator('input[name="vatValue"]')
      this.SaveButton = page.getByRole('button', { name: 'Save quotation' })
    }

    async goto() {
      await this.QuotationsPage.click();
    }

    async CreateQuotations() {
      await this.NewQuotationButton.click();
    }
dayCompleteInput = 18
  async NewQuotationForm(GroupTitle,ItemnameOne,UnitPrices,ItemNameTwo,ItemNameThree,termsConditions,AgencyFees,discount,vatValues,dayCompleteInput) {
        await this.ClientQuotationName.click();
        await this.ClienSelectButton.click();
        await this.QuotationDateCalender.click();
        await this.QuotationDate.click();
        await this.dayToCompleteSwitch.click();
        await this.dayToCompleteInput.fill(dayCompleteInput);
        await this.SelectCurrencyButton.click();
        await this.CurrencyName.click();
        await this.GroupTitleInput.fill(GroupTitle);
        await this.ItemOne.click();
        await this.ItemOneName.fill(ItemnameOne);
        await this.UnitPrice.fill(UnitPrices);
        await this.ItemTwo.click();
        await this.ItemTwoName.fill(ItemNameTwo);

        await this.ItemThreeName.fill(ItemNameThree);
        await this.TermsAndConditions.fill(termsConditions);
        await this.AgencyFee.fill(AgencyFees);
        await this.discountAmount.fill(discount);
        await this.vatValue.fill(vatValues);
        await this.SaveButton.click();
  }
}
  module.exports = CreateQuotations;