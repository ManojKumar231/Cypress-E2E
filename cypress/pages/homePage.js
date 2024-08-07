export class homePage {

    webLocators = {
        search_input: '.form-control.input-lg',
        click_search: '.input-group-btn > .btn',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessages: 'div.alert.alert-success.alert.alert-dismissible'
    }

    searchProduct(productName) {
        cy.get(this.webLocators.search_input).type(productName)
        cy.get(this.webLocators.click_search).click()
    }

    addToCart() {
        cy.contains(this.webLocators.addtocart).first().click()
    }

    verifySuccessMessage() {
        return cy.get(this.webLocators.successMessages)
    }
}