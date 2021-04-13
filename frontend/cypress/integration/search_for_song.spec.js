describe("Search for song", () => {
  it("Search after song", () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".chakra-input").clear();
    cy.get(".chakra-input").type("ugle");
    cy.get(".chakra-text").click();
    /* ==== End Cypress Studio ==== */
  });
});
