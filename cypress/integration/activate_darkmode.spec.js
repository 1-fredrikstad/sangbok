describe("Activate darkmode", () => {
  it("Navigate to settings", () => {
    cy.visit("http://localhost:3000/settings");
    
  });

  it("Activate darkmode", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000/settings');
    cy.get('.chakra-switch__track').click();
    cy.get('#dark-mode').check();
    cy.get('[aria-label="Go to search view"] > svg').click();
    /* ==== End Cypress Studio ==== */
  });

  /* === Test Created with Cypress Studio === */
  it('Return to search page', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000/search');
    /* ==== End Cypress Studio ==== */
  });
});
