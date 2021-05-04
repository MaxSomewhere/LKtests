const { loginForm } = require("../pageobject/loginForm")

describe ("Log in", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

let selectAuthContract = '[rel="user"]';
let selectAuthEmail = '[rel="email"]';


    it ("Валидация полей при авторизации с № Договора (негативное тестирование)",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            //Выбор метода авторизации "№ Договора + пароль"
            loginForm.selectAuthInput(selectAuthContract)

                //Авторизация с невалидным № Договора
                loginForm.userAuthContract(lk.invalidAkkNum , lk.correctAkkPass)
                cy.url().should('eq', lk.baseUrl)

                //Авторизация с некорректным № Договора
                loginForm.userAuthContract(lk.incorrectAkkNum , lk.correctAkkPass)
                cy.url().should('eq', lk.baseUrl)

                //Авторизация с корректным № Договора и некорректным паролем
                loginForm.userAuthContract(lk.correctAkkNum , lk.incorrectAkkPass)
                cy.url().should('eq', lk.baseUrl)


        })
    })


    it ("Валидация полей при авторизации с № Договора(позитивное тестирование)",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            //Выбор метода авторизации "№ Договора + пароль"
            loginForm.selectAuthInput(selectAuthContract)

                //Авторизация с корректным № Договора и корректным паролем
                loginForm.userAuthContract(lk.correctAkkNum , lk.correctAkkPass)
                cy.url().should('eq', 'https://stat.briz.ua/')
        })
    })


    it ("Валидация полей при авторизации с Email(негативное тестирование)",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            //Выбор метода авторизации "Email + пароль"
            loginForm.selectAuthInput(selectAuthEmail)

                //Авторизация с невалидным Email
                loginForm.userAuthEmail(lk.invalidEmail , lk.correctAkkPass)
                cy.url().should('eq', lk.baseUrl)

                //Авторизация с некорректным Email
                loginForm.userAuthEmail(lk.incorrectEmail , lk.correctAkkPass)
                cy.url().should('eq', lk.baseUrl)

                //Авторизация с корректным Email и некорректным паролем
                loginForm.userAuthEmail(lk.correctEmail , lk.incorrectAkkPass)
                cy.url().should('eq' , lk.baseUrl)


        })
    })


    it ("Валидация полей при авторизации с Email(позитивное тестирование)",() => {
        cy.fixture('lktests').then(lk => {
            cy.visit(lk.baseUrl)

            //Выбор метода авторизации "Email + пароль"
            loginForm.selectAuthInput(selectAuthEmail)

                //Авторизация с корректным Email и корректным паролем
                loginForm.userAuthEmail(lk.correctEmail, lk.correctAkkPass)
                cy.url().should('eq', 'https://stat.briz.ua/')
        })
    })
})