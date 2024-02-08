
describe('login', function() {
  it('login', function() {
  cy.visit('https://qualle-development.web.app/login')
  cy.get("body").then($body => {
    if ($body.find(".v-input__slot > .v-label").length > 0) {  
        //evaluates as true
  cy.get('#input-12').type('sushmitha.thoutam@cognine.com')
  cy.get('#input-15').type('123456789')
  cy.get('.width-100 > .v-btn__content').click()
  cy.wait(5000)

  //cy.get("v-card__title pb-2").should("have.text","Containers").and("be.visible")
  cy.get('.search-input').should("exist")
 
  cy.get('.mobile-menu > .rounded-sm').click()
  cy.wait(6000)
  cy.get('#list-item-250').click();
  // cy.get('#input-272').type('ref00')
  // cy.get('#input-277').type('CONT1234567')
  // cy.get('#input-288').click()
  // cy.get('#list-item-329-2').click()
  // cy.get('#input-308').click()
  // cy.get('#list-item-348-0').click()
  // cy.get('#input-313').click()
  // cy.get('#list-item-353-1').click()
  cy.scrollTo('bottom')
  for(let i=1;i<=5;i++){
  cy.get('.mt-4 > .v-btn > .v-btn__content').click()
  }
  // cy.get('.v-card__actions > .elevation-0').click()
  }
  else{
  cy.get('.mobile-menu > .rounded-sm').click()
  cy.get('#list-item-93').click()
 }
}
);
}
)//end of it block
})


