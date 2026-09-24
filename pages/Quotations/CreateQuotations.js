class CreateQuotations {
    constructor(page) {
      this.page = page;
      this.QuotationsPage = page.getByRole('link', { name: 'Quotations' });
      this.NewQuotationButton = page.getByRole('button', { name: /^New Quotation/ });
      this.SelectProjectModal = page.locator('div').filter({ hasText: 'Select a projectSearch all' }).nth(4)
      this.SearchClientQuotationName = page.getByRole('textbox', { name: 'Search by project or client' })
      this.ClienSelectButton= page.getByRole('button', { name: 'Use this project' })
      this.QuotationDateCalender = page.getByRole('textbox', { name: 'Select date' })
      this.QuotationDate = page.getByText('24', { exact: true })
      this.dayToCompleteSwitch = page.getByRole('main').getByRole('switch')
      this.dayToCompleteInput = page.locator('input[name="daysToComplete"]')
      this.SelectCurrencyButton = page.locator('div').filter({ hasText: /^Select currency$/ }).nth(3)
      this.CurrencyName = page.getByText('BDT — Bangladeshi Taka')
      this.GroupTitleInput = page.getByRole('textbox', { name: 'e.g. Design' })
      this.UnitPrice = page.locator('input[name="items.0.unitPrice"]').nth(0)
      this.ItemOneName = page.getByRole('textbox', { name: 'Item name' }).nth(0)
      this.ItemTwo = page.getByRole('button', { name: 'Add item' })
      this.ItemTwoName = page.getByRole('textbox', { name: 'Item name' }).nth(1)
      this.ItemThree = page.getByRole('button', { name: 'Add item' })
      this.ItemThreeName = page.getByRole('textbox', { name: 'Item name' }).nth(2)
      this.TermsAndConditions = page.locator('.tiptap')
      this.AgencyFee = page.locator('input[name="afs"]')
      this.discountAmount = page.locator('input[name="discountAmount"]')
      this.vatValue = page.locator('input[name="vatValue"]')
      this.SaveButton = page.getByRole('button', { name: 'Save quotation' })
      
      this.SendQButton = page.getByRole('button', { name: 'Mark as sent' })
      this.FinalSentQButton = page.getByRole('button', { name: 'Sent Quotation' })
      this.ApproveQButton = page.getByRole('button', { name: 'Approve' })
      this.FinalApproveQButton =  page.getByRole('dialog').getByRole('button', { name: 'Approve' })
    }

    async goto() {
      await this.QuotationsPage.click();
    }

    async CreateQuotations() {
      await this.NewQuotationButton.click();
    }

  async NewQuotationForm(ProjectName,GroupTitle,ItemnameOne,UnitPrices,ItemNameTwo,ItemNameThree,termsConditions,AgencyFees,discount,vatValues,dayCompleteInput) {
        await this.SelectProjectModal.click();
        await this.SearchClientQuotationName.fill(ProjectName);
        await this.ClienSelectButton.click();
        await this.page.locator('.ant-modal-wrap').first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
        await this.QuotationDateCalender.waitFor({ state: 'visible', timeout: 15000 });
        await this.QuotationDateCalender.fill('2026-08-24');
        await this.dayToCompleteSwitch.click();
        await this.dayToCompleteInput.fill(dayCompleteInput);
        await this.SelectCurrencyButton.click();
        await this.CurrencyName.click();
        await this.GroupTitleInput.fill(GroupTitle);
        await this.ItemOneName.fill(ItemnameOne);
        await this.UnitPrice.fill(UnitPrices);
        await this.ItemTwo.click();
        await this.ItemTwoName.fill(ItemNameTwo);
        await this.ItemThree.click();
        await this.ItemThreeName.fill(ItemNameThree);
        await this.TermsAndConditions.fill(termsConditions);
        await this.AgencyFee.fill(AgencyFees);
        await this.discountAmount.fill(discount);
        await this.vatValue.fill(vatValues);
        await this.SaveButton.click();
        await this.SendQButton.click()
        await this.FinalSentQButton.click()
        await this.ApproveQButton.click()
        await this.FinalApproveQButton.click()
  }

 
}
  module.exports = CreateQuotations;