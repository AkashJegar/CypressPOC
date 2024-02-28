/// <reference types = "cypress"/>
import 'cypress-iframe'

describe('Text verification', function () {
    // it function to identify test
    it('test1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com")
       // identify element
       cy.get('h1#headingText').find('span').then(function(e){
          //method text to obtain text content
          const t = e.text()
          expect(t).to.contains('Sign')
       })
    })


    

});
 


 describe('Asynchronous Behavior', function () {
    it('Test1', function (){
       // test step to launch a URL
       cy.visit("https://accounts.google.com")
       // identify element
       cy.get('h1#headingText').find('span').should('have.text', 'Sign in')
       cy.get('h1#headingText').find('span').then(function(e){
          const t = e.text()
          // get in Console
          console.log(t)
       })
       // Console message
       console.log("Tutorialspoint-Cypress")
    })
 })
 
 /*describe('Tutorialspoint', function () {
    // it function to identify test
       it('Scenario 1', function (){
          // test step to launch a URL
          cy.visit("https://accounts.google.com")
          // Promise implementation with then()
          cy.get('h1#headingText').find('span').then(function(e){
             //method text to obtain text content
             const t = e.text()
             expect(t).to.contains('Sign')
          })
       })
    })
    */

    /*describe('Checkbox', function () {
        // it function to identify test
        it('test1', function (){
           // test step to launch a URL
           cy.visit("https://accounts.google.com/signup")
           //checkbox with assertion
           cy.get('input[type="checkbox"]').check().should('be.checked')
        
        })
     })
     */

     describe('Tabs', function () {
        // test case
        it('Test1', function (){
           // url launch
           cy.visit("https://the-internet.herokuapp.com/windows")
           // delete target attribute with invoke for link
           cy.get('.example > a').invoke('removeAttr', 'target').click()
           // verify tab url
           cy.url()
           .should('include', 'https://the-internet.herokuapp.com/windows/new')
           // shift to parent window
          cy.go('back');
        });
     });

    /* describe('Dropdown', function () {
        // it function to identify test
        it('Test1', function (){
           // test step to launch a URL
           cy.visit("https://register.rediff.com/register/register.php")
           //select option India with value then verify with assertion
           cy.get('select[id="country"]').select('99').should('have.value', '99')
           //cy.get('select[name="city62acf72f"]').select('Agra').should('have.value', 'Agra')

        })
     })
     */

     describe('Alerts', function () {
      // test case
      it('Scenario 1', function (){
         // launch url
         cy.visit("https://register.rediff.com/register/register.php");
         // click submit
         cy.get('input[type="submit"]').click();
      });
   });

   describe('child window', function () {
      // test case
      it('Scenario 1', function (){
         // url launch
         cy.visit("https://the-internet.herokuapp.com/windows")
         // delete target attribute with invoke for link
         cy.get('.example > a')
         .invoke('removeAttr', 'target').click()
         // verify child window url
         cy.url()
         .should('include', 'https://the-internet.herokuapp.com/windows/new')
         // shift to parent window
         cy.go('back');
      });
   });

     describe('Hidden elements', function () {
        // test case
        it('test1', function (){
           // launch URL
           cy.visit("https://www.amazon.com/");
           //click hidden element
           cy.contains('Sign').click({force:true});
        });
     });


     describe('frames', function () {
        // test case
        it('Test Case6', function (){
           // launch URL
           cy.visit("https://jqueryui.com/draggable/");
           // frame loading
           cy.frameLoaded('.demo-frame');
           //shifting focus
           cy.iframe().find("#draggable").then(function(t){
              const frmtxt = t.text()
              //assertion to verify text
              expect(frmtxt).to.contains('Drag me around');
              cy.log(frmtxt);
           })
        });
     });
     
     /*describe('Mouse action', function () {
        // test case
        it('Test1', function (){
           // launch URL
           cy.visit("https://learn.letskodeit.com/p/practice");
           // show hidden element with invoke
           cy.get('div.mouse-hover-content').invoke('show');
           //click hidden element
           cy.contains('Top').click();
        });
     });
     */

     describe("Get Method", function(){
        it("Scenario 2", function(){
           cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
           }).then((r) => {
              expect(r.status).to.eq(200)
              expect(r).to.have.property('headers')
              expect(r).to.have.property('duration')
           });
        })
     })