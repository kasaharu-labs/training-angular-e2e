describe('First test', () => {
  it('should visit login page', () => {
    cy.visit('http://localhost:4200');
    cy.wait(500);
    cy.screenshot();
  });
});
