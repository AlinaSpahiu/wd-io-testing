class internetPage {

    //pageHeader
    get pageHeader() { return $('h1.heading') }
    getPageHeader() {
        this.pageHeader.getText();
        console.log("merrHeader", this.pageHeader.getText());
    }

    //pageFooter
    get pageFooter() { return $("#page-footer") }
    getPageFooter() {
        this.pageFooter.getText();
        console.log("merrFooter", this.pageHeader.getText());
    }

    //get All li-s 
    get ul() { return $('ul') }
    get lis() { return this.ul.$$("li") }
    getAllLi() {
        this.lis.length;
        console.log("lengthi", this.lis.length);

        this.lis.filter((el) => {
            console.log('liiis', el.getText());
        })
    }


    //nese dojm me punu me index nuk munemi me e perdor get
    specificLi(index) { return this.ul.$(`li:nth-child(${index}) a`) }
    get specificLink() { return $(`ul li:nth-child(1) a`) }









    getspecificLi(index) {
        this.specificLi(index).waitForDisplayed()
        return this.specificLi(index).getText();
        browser.pause(3000);
    }

    clickOnLink() {
        if (this.specificLink.isDisplayed() === true) {
            return this.specificLink.click()
        }
        browser.pause(5000)
    }

    getIsDisplayed(index) {
        console.log(this.specificLink(index))
    }

}

module.exports = new internetPage()