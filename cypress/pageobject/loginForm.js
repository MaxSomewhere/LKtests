let inputSelectAuth = '.select-styled';
let inputLogin = '#userid';
let inputPassword = '#userpassword';
let buttonSubmit = 'button[class="btn shadow login-btn"]';

export class AuthLoginform {

    //Выбор способа авторизации
    selectAuthInput (selectInput) {
        cy.get(inputSelectAuth).click()
        cy.get(selectInput).click({ force: true })
    }

    //Авторизация при помощи номера договора
    userAuthContract(login, password) {
        cy.get(inputLogin).clear().type(login)
        cy.get(inputPassword).clear().type(password)
        cy.get(buttonSubmit).click()
    }

    //Авторизация при помощи логина
    userAuthLogin(login, password) {
        cy.get(inputLogin).clear().type(login)
        cy.get(inputPassword).clear().type(password)
        cy.get(buttonSubmit).click()
    }


    //Авторизация при помощи Email
    userAuthEmail(login, password) {
        cy.get(inputLogin).clear().type(login)
        cy.get(inputPassword).clear().type(password)
        cy.get(buttonSubmit).click()
    }
}

export const loginForm = new AuthLoginform()