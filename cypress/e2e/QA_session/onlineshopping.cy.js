/// <reference types = "cypress"/>

describe('demo', () =>{

    it('demo', () =>{
         
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Argus All-Weather Tank ').scrollIntoView();
        cy.contains('Argus All-Weather Tank').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-52').click();
        cy.get('input[type="number"]').clear().type('2');
        cy.get('#product-addtocart-button').click();
        cy.wait(5000);
    
    
        cy.xpath('/html/body/div[2]/header/div[2]/div[1]/a/span[2]').click();
    
    
        cy.get('#top-cart-btn-checkout').click();
    
        cy.wait(15000);
    
        cy.get('#customer-email').type('akash@123.com');
        cy.get('input[name="firstname"]').type('Akash');
        cy.get('input[name="lastname"]').type('Jegar');
        cy.get('input[name="company"]').type('Aj');
        cy.get('input[name="street[0]"]').type('1/88');
        cy.get('input[name="city"]').type('Hyderabad');
        cy.get('input[name="region_id"]').select('Option2');
         // cy.contains('input[name="region_id"]', 'option2').click();
        cy.get('input[name="postcode"]').type('11221');
        cy.get('input[name="country_id"]').select('Option9');
        cy.get('input[name="telephone"]').type('9876543210');
        cy.get('button[type="submit"]').click();
    
    
    
    
     })
    })