/// <reference types = "cypress"/>


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
  
  
    it('Asynchronous Behavior', function (){
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
  
  
   it('tabs', function (){
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
  
  it('alerts', function (){
    // launch url
    cy.visit("https://register.rediff.com/register/register.php");
    // click submit
    cy.get('input[type="submit"]').click();
  });
  
  it('child window', function (){
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
  
  it('hidden elements', function (){
    // launch URL
    cy.visit("https://www.amazon.com/");
    //click hidden element
    cy.contains('Sign').click({force:true});
  });
  
  /*it('frames', function (){
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
  */

  
  
  
  });