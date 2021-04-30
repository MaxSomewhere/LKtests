const { loginForm } = require("../pageobject/loginForm")

describe ("Log in", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

 
    it ("Валидация полей авторизации",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            //Авторизация с невалидным № Договора
            loginForm.userAuthContract(lk.invalidAkkNum , lk.correctAkkPass)

            //Авторизация с некорректным № Договора
            loginForm.userAuthContract(lk.incorrectAkkNum , lk.correctAkkPass)

            //Авторизация с корректным № Договора и корректным паролем
            loginForm.userAuthContract(lk.correctAkkNum , lk.correctAkkPass)



        })
    })
})