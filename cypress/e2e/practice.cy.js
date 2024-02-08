

describe("My First Test Suite",function()
{
it("My First Test Case",function()
{
cy.visit('https://www.demoblaze.com/index.html');
//cy.get("body div[id='contcont'] div[class='row'] div[class='col-lg-9'] div[id='tbodyid'] div:nth-child(1) div:nth-child(1").click();
cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
cy.get('.col-sm-12 > .btn').click()
cy.get(':nth-child(4) > .nav-link').click()
cy.get('.col-lg-1 > .btn').click();

cy.get('#name').type('John');
cy.get('#country').type('cena');
cy.get('#city').type('dubai');
cy.get('#card').type('1122334455');
cy.get('#month').type('January');
cy.get('#year').type('2024')
cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();




})
})
