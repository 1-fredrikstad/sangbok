// access_lyrics.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Access lyrics', () => {
  it('Select and view a song', () => {
    cy.visit('http://localhost:3000/');

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .chakra-stack > .chakra-text').click();
    /* ==== End Cypress Studio ==== */
  });
});
