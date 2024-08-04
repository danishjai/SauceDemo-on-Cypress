import { describe } from "mocha"

describe('Payment Flows', () => {
    beforeEach(() => {
      cy.fixture('accounts').then((account) => {
        //Login to the standard user account
        cy.loginToAccount(account.standardUser, account.password);
      });
    });
    it('User purchases an item through the home page sucessfully', () => {
      //Add an item on the homepage to the cart
      cy.get('div.inventory_item:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click();

      //Navigate to cart and verify item details in cart
      cy.verifyItemsInCart();
      
      //Navigate to checkout info and fill in required details
      cy.fillCheckoutInfo();

      //Navigate to the checkout details page and verify transaction details
      cy.verifyCheckoutInfo();

      //Complete transaction and verify transaction is successful
      cy.finishTransaction();
    });
    it('User purchases an item through the item details page successfully', () => {    
      //Click on selected item and add item to cart
      cy.get('#item_4_title_link > div:nth-child(1)').click();
      cy.get('.btn_primary.btn_inventory').click();

      //Navigate to cart and verify item details in cart
      cy.verifyItemsInCart();

      //Navigate to checkout info and fill in required details
      cy.fillCheckoutInfo();

      //Navigate to the checkout details page and verify transaction details
      cy.verifyCheckoutInfo();

      //Complete transaction and verify transaction is successful
      cy.finishTransaction();
    });
  });