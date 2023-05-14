describe('Cart flow tests', () => {
    beforeEach(() => {
        cy.visit('/carina-cardigan.html');
    })
    it('add a product to cart', () => {
        cy.addProduct();
        cy.get('.cartTrigger-counter-2ju')
            .should('contain','1')
            .first()
            .click();

        cy.get('.miniCart-header-BRH').should('contain', '1 Items');
        cy.get('.item-quantity-3p8').should('contain', 'Qty : 1');
    })

    it('add a product from cart page', () => {
        cy.addProduct();
        cy.get('.cartTrigger-counter-2ju')
            .should('contain','1')
            .first()
            .click();

        cy.get('button[type="button"]').contains('Edit Shopping Bag').click()
        cy.get('.cartPage-body-3FT').should('contain', 'Carina Cardigan');
        cy.get('button[aria-label="Increase Quantity"]').click();
        cy.get('input[name="quantity"]').should('have.value', '2');
        cy.get('.cartTrigger-counter-2ju').should('contain','2');
    })


})