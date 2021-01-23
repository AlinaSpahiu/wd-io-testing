const internetPage = require('../pageobjects/Internet.page')
// const expect = require('expect.js')
const expect = require('expect.js');

describe('Test element actions', ()=>{

    xit('Should click element', ()=>{
        browser.url('/')
        internetPage.clickOnLink()
        console.log('alina',expect(browser.getUrl()).to.equal('https://the-internet.herokuapp.com/abtest'))
    })

    it('should get text', ()=>{
        browser.url('/')
        console.log('haasan',expect(internetPage.getspecificLi(1)).to.equal('A/B Testing'))
    })
})