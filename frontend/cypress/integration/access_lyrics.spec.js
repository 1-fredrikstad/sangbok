describe("Access lyrics", () => {
  it("Select and view a song", () => {
    cy.visit("http://localhost:3000/search")
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="song/enda-en-test-sang"]').click();
    /* ==== End Cypress Studio ==== */
  })
})

