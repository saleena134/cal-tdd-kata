const { log } = require('detox');

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
        await expect(element(by?.id('t-display-text')))?.toHaveText('0')
        await expect(element(by?.id('ti-to-take-number-input')))?.toHaveText('')
    })
    it('should display 1 if value is 1', async () => {
        await element(by?.id('ti-to-take-number-input'))?.typeText('1')
    })
    it('should comma seprated', async () => {
        await element(by?.id('b-clear-text'))?.tap()
        await element(by?.id('ti-to-take-number-input'))?.typeText('2,3,4')
        await expect(element(by?.id('ti-to-take-number-input')))?.toHaveText('2,3,4')
    })

    it('should display sum of the numbers', async () => {
        await element(by?.id('b-clear-text'))?.tap()
        await element(by?.id('ti-to-take-number-input'))?.typeText('1,5')
        await expect(element(by?.id('t-display-text')))?.toHaveText('6')
    })

})