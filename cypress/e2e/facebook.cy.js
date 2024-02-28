/// <reference types = "cypress"/>
import 'cypress-iframe'

describe('Login and dashboard iteration', () =>{
    it('valid', () =>{
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
    })

    });

