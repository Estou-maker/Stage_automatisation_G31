import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import login_objects from '../Page_Objects/LoginObjects'



Given(`I am on the login page`, () => {
    // [Given] Sets up the initial state of the system.
    cy.visit(login_objects.url_env);
});

When(`I enter valid credentials`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.get(login_objects.email_input).should('be.visible').and('have.attr','name','Email');
    cy.get(login_objects.email_input).type(login_objects.login_email);
    cy.get(login_objects.password_input).should('be.visible').and('have.attr', 'type', 'password').type(login_objects.login_password);
    cy.get(login_objects.login_btn).click();
});

Then(`I should be Logged In`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get(login_objects.Home_header)
    .should('be.visible')
    .should('contain.text', 'Log out').should('contain.text', login_objects.login_email);
});