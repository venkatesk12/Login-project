describe('My Test', () => {
    it('passes', () => {
        // Visit the homepage
        cy.visit('/');

        cy.get('#stname1').type('venkatesh.k@innoart.io');
        cy.get('#stname2').type('Venki123#');
    });
});
