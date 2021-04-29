let inputSelectAuth = '.select-styled';
let selectAuthContract = '[rel="user"]';
let selectAuthEmail = '[rel="email"]';
let inputLogin = '#userid';
let inputPassword = '#userpassword';
let buttonSubmit = 'button[class="btn shadow login-btn"]';

export class AuthLoginform {

    //Авторизация при помощи номера договора
    userAuthContract(login, password) {
        cy.get(inputSelectAuth).click()
        cy.get(selectAuthContract).click({ force: true })
        cy.get(inputLogin).type(login)
        cy.get(inputPassword).type(password)
        cy.get(buttonSubmit).click()
    }

    //Авторизация при помощи логина
    userAuthLogin(login, password) {
        // cy.get(inputSelectAuth).click()
        // cy.get(selectAuthContract).click({ force: true })
        cy.get(inputLogin).type(login)
        cy.get(inputPassword).type(password)
        cy.get(buttonSubmit).click()
    }


    //Авторизация при помощи Email
    userAuthEmail(login, password) {
        cy.get(inputSelectAuth).click()
        cy.get(selectAuthEmail).click({ force: true })
        cy.get(inputLogin).type(login)
        cy.get(inputPassword).type(password)
        cy.get(buttonSubmit).click()
    }
}

export const loginForm = new AuthLoginform()