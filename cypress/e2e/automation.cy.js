import { describe } from "mocha"

describe('UI Automation Suite', () => {
  describe('Login Flows', () => {
    it('User logs in with a valid account', () =>{
      cy.fixture('accounts').then((account) => {
        //Login to the standard user account
        cy.loginToAccount(account.standardUser, account.password);
      });

      //Verify that the user is logged in sucessfully by finding the title in the homepage
      cy.get('.app_logo').should('have.text', 'Swag Labs');
    });
    it('User logs in with a locked account', () => {
      cy.fixture('accounts').then((account) => {
        //Login to the locked user account
        cy.loginToAccount(account.lockedUser, account.password);
      });
      cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
    it('User logs in with an incorrect username', () => {
      cy.fixture('accounts').then((account) => {
        //Login to the locked user account
        cy.loginToAccount('bad_user', account.password);
      });
      cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
    it('User logs in with an incorrect password', () => {
      cy.fixture('accounts').then((account) => {
        //Login to the locked user account
        cy.loginToAccount(account.lockedUser, 'badpassword');
      });
      cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
  describe('Payment Flows', () => {
    beforeEach(() => {
      cy.fixture('accounts').then((account) => {
        //Login to the standard user account
        cy.loginToAccount(account.standardUser, account.password);
      });
    });
    it.only('User purchases an item through the home page sucessfully', () => {
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.verifyItemsInCart();
      cy.get('#checkout').click();
      cy.fillCheckoutInfo();
      cy.get('#continue').click();
      cy.verifyCheckoutInfo();
      cy.get('#finish').click();
      cy.get('.title').should('have.text', 'Checkout: Complete!');
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
  })
});