// access_song_from_song.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Access song from song', () => {
  it('Select first song from list', () => {
    cy.visit('http://localhost:3000/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-input').clear();
    cy.get('.chakra-input').type('hauk');
    cy.get('.chakra-text').click();
    cy.get('[aria-label="Next song"] > .chakra-icon').click();
    /* ==== End Cypress Studio ==== */
  });
});
