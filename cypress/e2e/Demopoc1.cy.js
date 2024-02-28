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
    cy.get('input[name="username"]').type(validCredentials.username);
    cy.get('input[type="password"]').type(validCredentials.password);

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Validate successful login
    cy.url().should('include', '/dashboard');
    // Perform other actions on the dashboard if needed
    // ...

    // Logout or navigate to the next test
    // ...
  });

  it('should handle login failure with invalid credentials', () => {
    // Enter invalid credentials
    cy.get('input[name="username"]').type(invalidCredentials.username);
    cy.get('input[type="password"]').type(invalidCredentials.password);

    // Click the login button
    cy.get('button[type="submit"]').click();

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
    cy.get('input[name="username"]').type(validCredentials.username);
    cy.get('input[type="password"]').type(validCredentials.password);
    cy.get('button[type="submit"]').click();

  
  });
});

