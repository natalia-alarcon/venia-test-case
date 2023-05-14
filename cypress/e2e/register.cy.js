describe('Register page test', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('register a user', () => {
        cy.get('button[aria-label="Sign In"]').click();
        cy.get('button[type="button"]').contains('Create an Account').click();
        
        cy.get('#firstName').type('Natália');
        cy.get('#lastName').type('Alarcon');
        cy.get('#Email').type(Cypress.env('user_email'));
        cy.get('#Password').type(Cypress.env('user_password'),{log: false });

        cy.get('button[type="submit"]').contains('Create an Account').click();

        cy.get('button[aria-label="Toggle My Account Menu"]').contains('Hi, Natália').should('be.visible');
    })

})
