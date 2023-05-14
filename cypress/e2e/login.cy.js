describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('/');
    })
    it('login user', () => {
        cy.login();

        cy.get('button[aria-label="Toggle My Account Menu"]').contains('Hi, Natália').should('be.visible');
    })

    it('reset password', () => {
        cy.get('button[aria-label="Sign In"]').click();
        cy.get('#email').type(Cypress.env('user_email'));
        cy.get('button').contains('Forgot Password?').click();
        cy.get('#email').should('have.value', Cypress.env('user_email'));
        cy.get('button').contains('Submit').click();

        cy.get('.formSubmissionSuccessful-text-1kS').should('contain', 'you will receive an email with a link to change your password.');

    })

})