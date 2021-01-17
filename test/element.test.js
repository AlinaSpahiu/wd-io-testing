const internetPage = require('../pages/internet.page')


describe('Interacting with elements', function(){
    it('Get text for element', () => {
        browser.url('/')
        let getByTag = $('h2').getText()//getting element by tag name
            console.log('gettinh h2 Text:', getByTag)

        let getByClass = $('.heading').getText() // getting element by class name
            console.log('gettinh the class:', getByClass)

        let getById = $('#page-footer').getText() // getting elemtn by id name
            // console.log('getting by Id:', getById)

        let getByIdSelenium = $("//*[@id='page-footer']").getText() // getting element by selenium
            // console.log('getting by Id:', getByIdSelenium)

        // internetPage.getLiText() // imported function from internetPage class, getting all 'li' elements.

        // internetPage.getSpecificElementText(3) 
    })

    it("Is footer Displayed", () =>{
        console.log('Page Footer:', internetPage.pageFooter.isDisplayed())
    })
    it("Does the header exists", () => {
        console.log('Page Header:', internetPage.pageHeader.isExisting())
    })
    it("Is footer in viewport?", ()=>{
        console.log('Is footer displayed in viewpoer?', internetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is header in viewport?", ()=>{
        console.log('Is header displayed in viewpoer?', internetPage.pageHeader.isDisplayedInViewport())
    })
    it("Is subheader enabled?", ()=>{
        console.log("is subHeader enabled?", internetPage.subHeading.isEnabled())
    })
    it("Clicl Element", () => {
        internetPage.clickOnLink()
    })
})




