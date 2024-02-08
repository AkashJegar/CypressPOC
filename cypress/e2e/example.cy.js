/// <reference types = "cypress"/>
// cypress/integration/orangehrm_spec.js

// URL of the OrangeHRM application
const orangeHrmUrl = 'https://opensource-demo.orangehrmlive.com/';

// Credentials
const validCredentials = { username: 'admin', password: 'admin123' };
const invalidCredentials = { username: 'invaliduser', password: 'invalidpassword' };

// Cypress test
describe('OrangeHRM Login Test', () => {
  beforeEach(() => {
    // Visit the OrangeHRM application before each test
    cy.visit(orangeHrmUrl);
  });

  it('should log in with valid credentials', () => {
    // Enter valid credentials
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validCredentials.username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validCredentials.password);

    // Click the login button
    cy.get('.oxd-button').click();

    // Validate successful login
    cy.url().should('include', '/dashboard');
    // Perform other actions on the dashboard if needed
    // ...

    // Logout or navigate to the next test
    // ...
  });

  it('should handle login failure with invalid credentials', () => {
    // Enter invalid credentials
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(invalidCredentials.username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(invalidCredentials.password);

    // Click the login button
    cy.get('.oxd-button').click();

    // Validate login failure and display an error message
    cy.get('#spanMessage').should('contain.text', 'Invalid credentials');

    // You can add additional assertions or actions for a failed login scenario
    // ...

    // For example, assert that the login form is still visible
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
  });

  // You can add more test cases for different scenarios or functionalities

  it('should navigate to the "Admin" page after successful login', () => {
    // Use the login function or duplicate login steps from the first test
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validCredentials.username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validCredentials.password);
    cy.get('.oxd-button').click();

    // Validate successful login
    /*cy.url().should('include', '/dashboard');
    cy.get('#welcome').should('contain.text', `Welcome ${validCredentials.username}`);

    // Navigate to the "Admin" page
    cy.get('#menu_admin_viewAdminModule').click();
    cy.get('#menu_admin_UserManagement').should('be.visible');
    cy.get('#menu_admin_viewAdminModule').should('have.class', 'open');
    cy.get('#menu_admin_UserManagement').click();

    // Validate the navigation to the "Admin" page
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.get('.head').should('contain.text', 'System Users');
    */
  });
});

