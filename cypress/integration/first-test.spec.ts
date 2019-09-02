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

  describe('click link in nav', () => {
    it('Dashboard をクリックすると /dashboard に遷移する', () => {
      const redirectUrl = `${baseUrl}/dashboard`;

      cy.visit(baseUrl);
      cy.wait(500);

      cy.get('nav')
        .find('a')
        .contains('Dashboard')
        .click();
      cy.wait(500);
      cy.url().should('eq', redirectUrl);
      cy.screenshot();
    });

    it('Heroes をクリックすると /heroes に遷移する', () => {
      const redirectUrl = `${baseUrl}/heroes`;

      cy.visit(baseUrl);
      cy.wait(500);

      cy.get('nav')
        .find('a')
        .contains('Heroes')
        .click();
      cy.wait(500);
      cy.url().should('eq', redirectUrl);
      cy.screenshot();
    });
  });
});
