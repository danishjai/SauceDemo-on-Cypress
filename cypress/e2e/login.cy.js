import { describe } from "mocha"

describe('Login Flows', () => {
  it('User logs in with a valid account', () =>{
    cy.fixture('accounts').then((account) => {
      //Login to the standard user account
      cy.loginToAccount(account.standardUser, account.password);
    });

    //Verify that the user is logged in sucessfully by finding the title in the homepage
    cy.get('.product_label').should('have.text', 'Products');
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