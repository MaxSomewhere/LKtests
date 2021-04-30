let inputSelectAuth = '.select-styled';
let inputContractLogin = 'input[id="userid"]';
let inputContractPassword = 'input[name="userpassword"]';
let buttonSubmit = 'button[class="btn shadow login-btn"]';

let inputEmailLogin = 'input[name="useremail"]';
let inputEmailPassword = 'input[name="emailpassword"]';

export class AuthLoginform {

    //Выбор способа авторизации
    selectAuthInput (selectInput) {
        cy.get(inputSelectAuth).click()
        cy.get(selectInput).click({ force: true })
    }

    //Авторизация при помощи номера договора
    userAuthContract(login, password) {
        cy.get(inputContractLogin).clear().type(login)
        cy.get(inputContractPassword).clear().type(password)
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
        cy.get(inputEmailLogin).clear().type(login)
        cy.get(inputEmailPassword).clear().type(password)
        cy.get(buttonSubmit).click()
    }
}

export const loginForm = new AuthLoginform()