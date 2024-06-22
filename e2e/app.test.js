describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp()
    });

    it('should have a number element', async () => {
        await expect(element(by.id('ti-to-take-number-input'))).toBeVisible();
    })
    it('should display number element', async () => {
        await expect(element(by?.id('t-display-text')))?.toBeVisible()
    })
    it('should display text if exist', async () => {
        await expect(element(by?.id('ti-to-take-number-input')))?.toExist()
    })
    it('should display zero if value is zero', async () => {
        await expect(element(by?.id('t-display-text')))?.toHaveText('0')
    })
    it('should tap', async () => {
        await element(by?.id('b-clear-text'))?.tap()
    })

})