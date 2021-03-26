const InternetPage = require('../pageobjects/internet.page')

describe("Interacting with elements", () => {
    before(()=>{
        browser.url('/');
    })
//Get pageHeader
 it('Get the text of header', () => {
    InternetPage.getPageHeader();
    InternetPage.getAllLi();
 })
//   xit('Get Text of header, footer, li', () =>{
//       internetPage.getPageHeader();
//       internetPage.getPageFooter();
//       internetPage.getAllLi(); //getting length and text of all LI
//       internetPage.getspecificLi(3);
//   })
//   xit("Click on link", ()=> {
//     internetPage.clickOnLink(5);
//     browser.url('/');
//     internetPage.clickOnLink(6);
//     browser.pause(2000);
//   })
//   // Element State
//   xit('Element State', ()=>{
//       console.log('pageHeader Displayed:', internetPage.pageHeader.isDisplayed())
//       console.log('pageHeader Existing:', internetPage.pageHeader.isExisting())
//       console.log('pageHeader Viewport:', internetPage.pageFooter.isDisplayedInViewport())
//      // console.log('pageHeader Enabled:', internetPage.clickOnLink(4).isEnabled())
//      // console.log('pageHeader Clickable:', internetPage.getIsDisplayed(5).isClickable())
//   })
})

