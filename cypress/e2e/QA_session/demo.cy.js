/// <reference types = "cypress"/>


describe('demo', () =>{
    beforeEach(()=>{
        cy.demourl();
    })
  it('login', () =>{
    cy.login();
  })
  it('invalid', () =>{
       cy.invalidlogin();
  })

})