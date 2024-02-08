/// <reference types = "cypress"/>

describe('Testing', ()=>{

    it('Testing', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('Admin');     //user name
        cy.get("input[placeholder='Password']").type('admin123');   // password
        cy.get("button[type='submit']").click();                     // login button


        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)').click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
       //cy.get('.oxd-button oxd-button--medium oxd-button--secondary').click();           //class name facing issue(Element not found)
       cy.get("input[placeholder='First Name']").type('John');
       cy.get("input[placeholder='Middle Name']").type('Cena');
       cy.get("input[placeholder='Last Name']").type('A')
       cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear().type('08');
       cy.get("button[type='submit']").click();                          //add employee id

      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();
      //cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").select(0);
      //cy.get("--select--").select('1').invoke("val").should("eq","Albanian");
     /*cy.get('div.oxd-select-option').each(($ele) => {
    if ($ele.text() == "Afghan") {
        cy.wrap($ele).click()
    }
    */
})







    })
