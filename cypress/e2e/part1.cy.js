/// <reference types = "cypress"/>

const url="https://www.demoblaze.com/";


const valid={ username: 'akash', password: '123'}
const name='Akash';
const country='India';
const city='Hyd';
const mob='1212121212';
const month='May';

describe('OrangeHRM Test', () => {
    beforeEach(() => {
      // Visit the OrangeHRM application before each test
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    });
  
    it('should interact with employees using arrays', () => {
      // Array of employee names to add
      const employeeNamesToAdd = ['John Doe', 'Jane Smith'];
  
      // Login to OrangeHRM
      cy.get('input[name="username"]').as('username');                                
      cy.get('input[type="password"]').as('password');       


      cy.get('@username').type('Admin');                                              
      cy.get('@password').type('admin123');
      cy.get('.oxd-button').click();

      cy.contains('PIM').click();
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();    //xpath
    
  
      // Add employees from the array
      cy.wrap(employeeNamesToAdd).each((employeeName) => {
        // Navigate to the "Add Employee" page
       
        
  
        // Fill in employee details
        cy.get('input[placeholder="First Name"]').type(employeeName.split(' ')[0]);
        cy.get('input[placeholder="Last Name"]').type(employeeName.split(' ')[1]);
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input').type('8');
        cy.contains('Save').click();
      });
    });
  

 
    it.only('should add a product to the cart', () => {
      // Visit the DemoBlaze application
      cy.visit(url);
      
      /*cy.get('#signin2').click();
      cy.get('#sign-username').type(valid.username);
      cy.get('#sign-password').type(valid.password);
      cy.get[type = "button"].click();
  
      cy.contains('OK').click();
      cy.get('.btn btn-secondary').click();
     */
      //click on the laptop section
      cy.get('#itemc').click();
  
      //select the mackbook air product in the laptop section
      cy.contains('MacBook air').click();
  
      //click on the add cart button
      cy.contains('Add to cart').click();
      
      //click on the cart section in the home page
      cy.get('#cartur').click();
  
      //check whether macbook added or not
      cy.get('body').should('contain.text', 'MacBook air');
  
      //place the order by clicking the place order button
      cy.contains('Place Order').click();
  
  
      // enter the all data in the purchase dialog
      cy.xpath('//*[@id="name"]').type('AKash');
      cy.contains('Country').type('India');
      cy.xpath('/html/body/div[3]/div/div/div[2]/form/div[3]/input').type('Hyderabad');
      cy.get('#card').type('998877665544332211');
      cy.get('#month').type('May');
  
      //click on the purchase button
      cy.contains('Purchase').click();
  
      if(cy.contains('Thank you for your purchase!')){
          console.log('True')
      }else{
          console.log('False')
      }
  
      //cy.contains('Id').should('contain.text', 'Thank you for your purchase!');
  
      //click on the ok in the pop-up
      cy.get('.confirm').click();
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
  
      // same process with different products
      cy.contains('Home').click();
  
      cy.contains('Nexus 6').click();
      cy.contains('Add to cart').click();
      cy.contains('cart').click();
  });
  });
  
  