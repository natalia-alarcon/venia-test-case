Cypress.Commands.add('login', (
    userEmail = Cypress.env('user_email'),
    userPassword = Cypress.env('user_password')
) => {
    const login = () => {
        cy.get('button[aria-label="Sign In"]').click();
        cy.get('#email').type(userEmail);
        cy.get('#Password').type(userPassword, {log : false});
        cy.get('button[type="submit"]').contains('Sign In').click();
    }
    
    login()
})

Cypress.Commands.add('addProduct', () => {
    cy.get('button[title="Peach"]').click();  
    cy.get('dl').should('contain', 'Selected Fashion Color:Peach')
    cy.get('button[title="S"]').click();
    cy.get('dl').should('contain', 'Selected Fashion Size:S');
    cy.get('input[name="quantity"]').should('have.value','1');
    cy.get('button[type="submit"]').contains('Add to Cart').click();
})