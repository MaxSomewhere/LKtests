const { loginForm } = require("../pageobject/loginForm")

describe ("Log in", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

 
    it ("Валидация полей авторизации",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            loginForm.userAuthContract(lk.correctAkkNum , lk.correctAkkPass)



        })
    })
})