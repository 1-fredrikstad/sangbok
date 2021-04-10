describe("Activate darkmode", () => {
  /* === Test Created with Cypress Studio === */
  it('Navigate to settings and activate darkmode', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000/settings');
    cy.get('.chakra-switch__track').click();
    cy.get('#dark-mode').check();
    /* ==== End Cypress Studio ==== */
  });
});
