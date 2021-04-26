// activate_darkmode.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Activate darkmode', () => {
  it('Navigate to settings and activate darkmode', function () {
    cy.visit('localhost:3000/');


    /* ==== Generated with Cypress Studio ==== */
    cy.get('[aria-label="Go to settings view"] > svg').click();
    cy.get('.chakra-switch__thumb').click();
    cy.get('#dark-mode').check();
    /* ==== End Cypress Studio ==== */
  });
});
