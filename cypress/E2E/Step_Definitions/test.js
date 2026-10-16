import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import vs_objects from '../Page_Objects/vsObjects'

Given(`I navigate to x`, () => {
    // [Given] Sets up the initial state of the system.
    cy.visit(vs_objects.url)
});

Then(`I should see elements`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get(vs_objects.thankyou).should('be.visible')
});

Then(`Header Navigation elements should be visible`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get(vs_objects.feature_btn).should('be.visible').and('contain.text','Features')
});
