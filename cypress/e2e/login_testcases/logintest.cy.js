/// <reference types = "cypress"/>

const url='https://ebpv3-69501.web.app/login';
const username='qualle.test.1@gmail.com';
const password='Jelly08142020!!';

describe('Qualle', () =>
{
    it('regestration page', () => {

         cy.visit(url);
         //cy.wait(5000);
         //cy.get('.drift-widget-controller-icon square').click();
         //cy.get('.text-body-s-semibold').should('be.visible')
        // .log('visible forgot password');
         cy.get('.flex > a > .text-body-s-semibold').click();
         cy.get('img[alt="qualle logo"]').should('be.visible')
         .log('Qualle logo');
         //cy.get('.text-body-s-semibold title').should('be.visible').log('account information');
         cy.xpath('(//*[@id="app"]/div/div/div[2]/div/div/div[1]/div/div)[2]').should('be.visible')
         .log('account information');
         cy.xpath('//*[@id="app"]/div/div/div[2]/div/div/div[2]/div/div[2]').should('be.visible')
         .log('work detail');
         cy.xpath('//*[@id="app"]/div/div/div[2]/div/div/div[3]/div/div[2]').should('be.visible')   
         .log('invite team members');
         cy.get('#input-8').type('test');
         cy.get('#input-10').type('test@gmail.com');
         cy.get('#input-12').type('cognine');
         cy.get('#input-14').type('8888888888');
         cy.get('#input-16').type('123456789');
         cy.get('#input-18').type('123456789');
         cy.contains('Next').should('be.visible').log('visible');


    })

    it('login page', () =>{
       cy.visit(url);
       cy.xpath('//*[@id="app"]/div/div/div[2]/div[1]').should('be.visible')
       .log('Welcome back');
       
       cy.get('input[type="email"]').type(username);
       cy.get('input[type="password"]').type(password);
       cy.get('button[type="submit"]').click();


    }
      
    )
    
}






);