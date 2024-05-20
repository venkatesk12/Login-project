describe('My First Test', () => {
    it('Visits the homepage', () => {
      cy.visit('/');
      cy.get('h1').should('contain', 'Welcome to my app!'); 
    });
  });