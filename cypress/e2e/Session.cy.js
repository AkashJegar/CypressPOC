/// <reference types = "cypress"/>

describe('demo', () =>{

it('demo', () =>{
     
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains('Argus All-Weather Tank ').scrollIntoView();
    cy.contains('Argus All-Weather Tank').click();
    cy.get('#option-label-size-143-item-168').click();
    cy.get('#option-label-color-93-item-52').click();
    cy.get('input[type="number"]').clear().type('2');
    //cy.get('button[type="submit"]').click();
    cy.get('#product-addtocart-button').click();
    cy.wait(5000);


    //cy.get('.counter qty').click();
    cy.xpath('/html/body/div[2]/header/div[2]/div[1]/a/span[2]').click();


    cy.get('#top-cart-btn-checkout').click();

    cy.wait(10000);

    cy.get('input[name="username"]').type('akash@123.com');
    cy.get('input[input-text]').type('Akash');
    cy.get('input[name="lastname"]').type('Jegar');
    cy.get('input[name="company"]').type('Aj')






 })
})