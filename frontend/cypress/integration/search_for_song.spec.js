// seearch_for_song.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Search for song', () => {
  it('Search for UGLESANGEN', () => {
    cy.visit('http://localhost:3000/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-input').clear();
    cy.get('.chakra-input').type('ugle');
    cy.get('.chakra-text').click();
    /* ==== End Cypress Studio ==== */
  });
});
