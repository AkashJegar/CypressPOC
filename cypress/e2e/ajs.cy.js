/// <reference types = "cypress"/>

describe('test', () =>{

    it('test1', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('PIM').click();
    //cy.get('button[type="button"]').scrollIntoView();
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]').click();

    cy.get('input[name="firstName"]').type('test');
    cy.get('input[name="lastName"]').type('1');
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input').clear().type('6');
    cy.xpath("//span[contains(@class,'oxd-switch-input')]").click();
    cy.xpath("//span[contains(@class,'oxd-switch-input')]").click();
    cy.get('button[type="submit"]').click();



})
});