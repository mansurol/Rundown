const path = require('path');

class CreateWorkOrder {
    constructor(page) {
      this.page = page;
      this.WorkOrderPage = page.getByRole('link', { name: 'Work orders' });
      this.NewWorkOrderButton = page.getByRole('button', { name: /^New Work Order/ });
      this.SelectQuotationName = page.getByText('GOML')
      this.SelectQuotationButton = page.getByRole('button', { name: 'Use this quotation' });
      this.WorkOrderdateCalender = page.getByRole('textbox', { name: 'Select date' }).first();
      this.ReceivedFromClient = page.getByRole('textbox', { name: 'Select date' }).nth(1);
      this.FileInput = page.locator('input[type="file"]');
      this.PdfFile = path.resolve(__dirname, '../../fixtures/QUOTATION__Tech-2.pdf');
      this.paymentMilestone = page.getByRole('button', { name: 'Add milestone' })
      this.PaymentShedule = page.locator('input[name="paymentSchedules.0.label"]')
      this.PaymentPersentange = page.locator('.ant-input-number-input').nth(0)
      this.PaymentDateCalender = page.getByRole('textbox', { name: 'Select date' }).nth(2)
      this.paymentMilestoneTwo = page.getByRole('button', { name: 'Add milestone' })
      this.PaymentSheduleTwo = page.locator('input[name="paymentSchedules.1.label"]')
      this.PaymentPersentangTwo = page.locator('.ant-input-number-input').nth(1);
      this.PaymentDateCalenderTwo = page.getByRole('textbox', { name: 'Select date' }).nth(3)
      this.endDate =  page.getByRole('cell', { name: '30', description: '2026-09-30' })
      this.RaiseWorkOrder = page.getByRole('button', { name: 'Raise work order' })
      this.ApproveWorkOrder = page.getByRole('button', { name: 'Approve' })
      this.FinalApproveWorkOrder = page.getByRole('dialog').getByRole('button', { name: 'Approve' })
    }

    async goto() {
      await this.WorkOrderPage.click();
    }

    async CreateWorkOrderButton() {
      await this.NewWorkOrderButton.click();
    }

    async NewworkOrder() {
      await this.SelectQuotationName.click();
      await this.SelectQuotationButton.click();

      await this.WorkOrderdateCalender.click();
      await this.page.getByRole('table').getByText('24', { exact: true }).click();

      await this.ReceivedFromClient.click();
      await this.page.getByRole('table').getByText('23', { exact: true }).click();

      await this.FileInput.setInputFiles(this.PdfFile);
      
      await this.paymentMilestone.click()
      await this.PaymentShedule.fill("1st")
      await this.PaymentPersentange.fill("50")
      await this.PaymentDateCalender.click()
      await this.page.getByRole('table').getByText('24').nth(0).click()
            await this.paymentMilestoneTwo.click()

      await this.PaymentSheduleTwo.fill("2nd")
      await this.PaymentPersentangTwo.fill("50")
      await this.PaymentDateCalenderTwo.click()
      await this.endDate.click()
      await this.RaiseWorkOrder.click()
      await this.ApproveWorkOrder.click()
      await this.FinalApproveWorkOrder.click()
    }
}

module.exports = CreateWorkOrder;