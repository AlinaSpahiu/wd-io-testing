const { expect } = require('chai')
const internetPage = require('../pages/internet.page')

internetPage = require('../pages/internet.page')

describe('Test element actions', function(){
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
})