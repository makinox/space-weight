describe('Initital tests', () => {
  context('Everithing ok test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });

  context('Principal page tests', () => {
    it('Renders login page', () => {
      cy.visit('http://localhost:3000/');
      cy.location('pathname').should('include', '/');
    });

    it('Renders its name on the navbar', () => {
      cy.get('nav > div:first-of-type > a').contains('Space weight');
    });

    it('Renders the spanish page', () => {
      cy.visit('http://localhost:3000/es');
      cy.get('h1').contains('Cual es mi peso en el planeta tierra');
    });
  });
});
