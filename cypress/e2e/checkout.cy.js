describe('Test checkout flow', () => {
    beforeEach(() => {
        cy.visit('/carina-cardigan.html');
        cy.addProduct();
        cy.visit('/checkout');
    })

    it('fill checkout form and submit', () => {
        cy.contains('1. Shipping Information').should('be.visible');
        cy.get('#email').type(Cypress.env('user_email'));
        cy.get('#firstname').type('Natália');
        cy.get('#lastname').type('Alarcon');
        cy.get('#country-root-aoy').select('Brazil');
        cy.get('#street0').type('Test Street');
        cy.get('#street1').type('Street Test');
        cy.get('#city').type('Test City');
        cy.get('#region-root-331').select('São Paulo');
        cy.get('#postcode-root-25E').type('1234567');
        cy.get('#telephone').type('123456789');
        cy.get('button[type=submit]').contains('Continue to Shipping Method').click();

        cy.contains('Shipping Method').should('be.visible');
        cy.get('input[value="freeshipping|freeshipping"]').should('be.checked');
        cy.get('button[type=submit]').contains('Continue to Payment Information').click();

        cy.get('input[value="checkmo"]').check();
        cy.get('button[type="button"]').contains('Review Order').click();
        cy.get('button[type="button"]').contains('Place Order').should('be.visible').click();

    })
})