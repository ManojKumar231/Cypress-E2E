import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'
import { faker } from '@faker-js/faker'
const registerObj = new registerPage()

describe('Test Automation', () => {

    it('Register Flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })

    let password = faker.internet.password()
    it('Register Flow With Dynamic Data', () => {
        registerObj.openURL()
        registerObj.enterFirstName(faker.person.firstName())
        registerObj.enterLastName(faker.person.lastName())
        registerObj.enterEmail(faker.internet.email())
        registerObj.enterTelephone(faker.phone.number())
        registerObj.enterPassword(password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
        registerObj.verifySuccessMessage()
    })
})