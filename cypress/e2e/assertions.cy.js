/// <reference types = "cypress"/>


// Variables
const baseUrl = 'https://opensource-demo.orangehrmlive.com/';
const validCredentials = { username: 'admin', password: 'admin123' };
const invalidCredentials = { username: 'invaliduser', password: 'invalidpassword' };

// Function to log in
function login(credentials) {
  cy.visit(baseUrl);
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').as('username');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').as('password')


  cy.get('@username').type('Admin');
  cy.get('@password').type('admin123');
  cy.get('.oxd-button').click();
}

// Cypress test
describe('OrangeHRM Login Test', () => {
  it('should log in with valid credentials', () => {
    login(validCredentials);

    // Check if login was successful
    
    cy.get('dashboard').should('include', 'dashboard');
    cy.get('#welcome').should('contain.text', '');

    // Perform other actions on the dashboard if needed
    // ...

    // Logout or navigate to the next test
    // ...
  });

  it('should handle login failure with invalid credentials', () => {
    login(invalidCredentials);

    // Check if login failed and display an error message
    cy.get('#spanMessage').should('contain.text', 'Invalid credentials');

    // You can add additional assertions or actions for a failed login scenario
    // ...


  });

  // You can add more test cases as needed, such as testing different scenarios or functionality
});

