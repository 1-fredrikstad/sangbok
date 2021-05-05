// swipe.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Access next song', () => {
  it('Open a song and access next six songs and then go back', () => {
    cy.visit('http://localhost:3000/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .chakra-stack > .chakra-text').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Next song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    cy.get('[aria-label="Previous song"]').click();
    /* ==== End Cypress Studio ==== */
  });
});
