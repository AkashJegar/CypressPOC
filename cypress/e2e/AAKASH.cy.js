/// <reference types = "cypress"/>

describe('Login and Dashboard Interaction', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('input[name="username"]').as('username');
      cy.get('input[type="password"]').as('password');
      cy.get('@username').type('Admin');
      cy.get('@password').type('admin123');
      cy.get('.oxd-button').click();
    });

    it('Handles alert triggered by Emergency Contacts section', () => {     // handling alerts on my info page
      // Click on the Emergency Contacts section to trigger an alert

      cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a').click();
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[3]/a').click();
  
      // Handle the alert by checking its content
      cy.on('window:alert', (str) => {
        expect(str).to.contain('Emergency Contacts List');
      });


    it('Opens child window (e.g., Job Vacancy form)', () => {
        // Click the button to add a new job vacancy
      cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a').click();
      cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]').click();
      cy.get('#btnAdd').click();
    
        // Assert that a child window is opened
      cy.window().its('length').should('be.gt', 1);
      });

    });
      
  
   
  });
  
