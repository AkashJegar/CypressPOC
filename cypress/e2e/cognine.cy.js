/// <reference types="Cypress" />

describe('orange hrm' ,() =>{

it('orangehrm' ,() => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('input[placeholder="Username"]').type('Admin');
    cy.get('input[placeholder="Password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.wait(5000)
    cy.contains('Leave').click();
    //cy.get('.oxd-table-row oxd-table-row--with-border').click();
    //cy.scrollTo(0, 500)
   // cy.get('.orangehrm-background-container').scrollTo('bottom')
    //cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div/div[6]/div').click();

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[9]/div/div[9]/div/li/button').scrollIntoView().click();
    cy.wait(3000);
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[9]/div/div[9]/div/li/ul/li[4]/p').click();


             //*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[9]/div/div[9]/div/li/button
})

})