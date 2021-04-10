describe("Search for song", () => {
  it("Search after song", () => {
    cy.visit("http://localhost:3000/search");


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-input').clear();
    cy.get('.chakra-input').type('Magnus');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('a').click();
    /* ==== End Cypress Studio ==== */
  });
});
