import { homePage } from '../../pages/homePage'
import testData from '../../fixtures/testData.json'

const homePageObj = new homePage()

describe('Test Automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add To Cart Flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})