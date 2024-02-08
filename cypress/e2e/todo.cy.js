/// <reference types = "cypress"/>

describe('OrangeHRM Test with Arrays', () => {
    beforeEach(() => {
      // Visit the OrangeHRM application before each test
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    });
  
    it('should interact with employees using arrays', () => {
      // Array of employee names to add
      const employeeNamesToAdd = ['John Doe', 'Jane Smith', 'Bob Johnson'];
  
      // Login to OrangeHRM
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('username');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').as('password')


      cy.get('@username').type('Admin');
      cy.get('@password').type('admin123');
      cy.get('.oxd-button').click();

      cy.contains('PIM').click();
        cy.contains('Add').click();
  
      // Add employees from the array
      cy.wrap(employeeNamesToAdd).each((employeeName) => {
        // Navigate to the "Add Employee" page
        
  
        // Fill in employee details
        cy.get('input[placeholder="First Name"]').type(employeeName.split(' ')[0]);
        cy.get('input[placeholder="Last Name"]').type(employeeName.split(' ')[1]);
        
        cy.contains('Save').click();
  
        // Verify the employee is added
        cy.get('input[]').should('have.attr', 'alt', employeeName);
      });
  
      // You can perform additional actions or assertions as needed
    });
  
    // You can add more test cases for different scenarios or functionalities
  });
  
  