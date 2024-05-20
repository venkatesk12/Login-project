describe('My Test Suite', () => {
    it('passes', () => {
      cy.visit('https://www.example.com/');
      cy.get('h1').should('contain', 'Example Domain');
    });
  }); 