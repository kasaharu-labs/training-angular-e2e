describe('First test', () => {
  let baseUrl;
  beforeEach(() => {
    baseUrl = 'http://localhost:4200';
  });

  describe('should visit top page', () => {
    it('/dashboard に遷移する', () => {
      const redirectUrl = `${baseUrl}/dashboard`;

      cy.visit(baseUrl);
      cy.wait(500);
      cy.url().should('eq', redirectUrl);
      cy.screenshot();
    });
  });
});
