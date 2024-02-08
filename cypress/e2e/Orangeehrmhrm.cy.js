


describe('orange hrm', () => 
{
    it('my test positive', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      
      cy.get(':nth-child(2) > .oxd-main-menu-item').click();
      cy.get('.orangehrm-header-container > .oxd-button').click();
      

      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Akash');
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Kumar');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('KUMAR');
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('007')
      cy.get('.oxd-button--secondary').click();

      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Adhar');
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('1234567890');
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
      
      cy.get(':nth-child(2) > .oxd-main-menu-item').click();
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().type('Karthik');
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click().type('Gowda');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click().type('G');
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('0001')
      cy.get('.oxd-button--secondary').click();



      cy.get(':nth-child(8) > .oxd-main-menu-item').click();
      cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
      cy.get(':nth-child(4) > .oxd-userdropdown-link').click();




      




      


    })    
  })