import './commands'
/// <reference types="cypress" />

Cypress.Commands.add('loginToAccount', (userName, userPassword) => {
    cy.visit('https://www.saucedemo.com/v1/');
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
    cy.get('.btn_action.checkout_button').click();
    cy.get('#first-name').clear().type('John');
    cy.get('#last-name').clear().type('Doe');
    cy.get('#postal-code').clear().type('123456');
});

Cypress.Commands.add('verifyCheckoutInfo', () => {
    cy.get('.btn_primary.cart_button').click();
    cy.get('.subheader').should('have.text', 'Checkout: Overview');
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('.inventory_item_price').should('contain', '29.99');
    cy.get('div.summary_value_label:nth-child(2)').should('have.text', 'SauceCard #31337');
    cy.get('div.summary_value_label:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!');
    cy.get('div.summary_subtotal_label').should('contain', '29.99');
    cy.get('div.summary_tax_label').should('contain', '2.40');
    cy.get('div.summary_total_label').should('contain', '32.39');
});

Cypress.Commands.add('finishTransaction',  () => {
    cy.get('.btn_action').click();
    cy.get('.subheader').should('have.text', 'Finish');
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
});