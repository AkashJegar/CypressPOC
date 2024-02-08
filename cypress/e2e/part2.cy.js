/// <reference types = "cypress"/>

describe('demo', ()=>{
    beforeEach(() => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      });

    it('test1', ()=>{
        cy.get('input[name="username"]').as('username');                                
        cy.get('input[type="password"]').as('password');


        cy.get('@username').type('Admin');                                              
        cy.get('@password').type('admin123');
        cy.get('.oxd-button').click();

        cy.contains('PIM').click();
    

    //it('Interacts with dropdown', () => {
        //cy.get('input[placeholder="Type for hints..."]').type('XYZ');
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input').type('1122');
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').check();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]').invoke('val', 'Freelance');
        cy.get('input[type="checkbox"]').check();
        //cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]').select('Option 2').should('have.value', '2');
   });
})