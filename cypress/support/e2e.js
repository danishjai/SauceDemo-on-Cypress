import './commands'
/// <reference types="cypress" />

Cypress.Commands.add('loginToAccount', (userName, userPassword) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').clear().type(userName);
    cy.get('#password').clear().type(userPassword);
    cy.get('#login-button').click();
});

Cypress.Commands.add('verifyItemsInCart', () => {
    cy.get('#shopping_cart_container > a').click();
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('.inventory_item_price').should('contain', '29.99');
});

Cypress.Commands.add('fillCheckoutInfo', () => {
    cy.get('#first-name').clear().type('John');
    cy.get('#last-name').clear().type('Doe');
    cy.get('#postal-code').clear().type('123456');
});

Cypress.Commands.add('verifyCheckoutInfo', () => {
    cy.get('.title').should('have.text', 'Checkout: Overview');
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('.inventory_item_price').should('contain', '29.99');
    cy.get('div[data-test="payment-info-value"]').should('have.text', 'SauceCard #31337');
    cy.get('div[data-test="shipping-info-value"]').should('have.text', 'Free Pony Express Delivery!');
    cy.get('div[data-test="subtotal-label"]').should('contain', '29.99');
    cy.get('div[data-test="tax-label"]').should('contain', '2.40');
    cy.get('div[data-test="total-label"]').should('contain', '32.39');
});