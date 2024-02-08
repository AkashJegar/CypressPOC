/// <reference types = "cypress"/>

const url='https://ebpv3-69501.web.app/login';
const username='qualle.test.1@gmail.com';
const password='Jelly08142020!!';

const exam='test';
const email='test@gmail.com';
const comname='cognine';
const num='8899889988';




describe('Qualle', () =>
{
    it('valid regestration', () => {

      cy.visit(url);
      /*cy.xpath('//*[@id="userMenu"]/div').click();
      cy.contains('Logout').click();
      */
      cy.get('img[alt="qualle logo"]').should('be.visible')
      .log('Qualle Logo');

      cy.get('.text-body-s-semibold').should('be.visible')
      .log('Forgot password');
      cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/a/div').click();            //open the regestration page

      cy.get('#input-8').type(exam);
      cy.get('input[type="email"]').type(email);
      cy.xpath('//*[@id="input-12"]').type(comname);
      cy.get('input[type="tel"]').type(num);
      cy.get('#input-16').type('123456789');
      cy.get('#input-18').type('123456789');
      cy.get('button[type="submit"]').should('be.enabled')
      .log('Next');                                                              // next button enable after enter the all data
      cy.get('button[type="submit"]').click();

      cy.xpath('//*[@id="app"]/div/div/div[2]/form/div[1]').should('be.visible')
      .log('Work Details');


      //cy.get('input[placeholder="Search to add location"]').type('123')
      cy.get('input[placeholder="Search to add location"]').type('123').should('be.equal', 'William street').click();
      //cy.wait(4000);
      //cy.select('123 william', '1')
      cy.get('#input-23').type('yes');
      /*cy.get('button[type="button"]').should('be.enabled')
      .log('Add members');
      */
      cy.get('button[type="submit"]').should('be.enabled')
      .log('Next');
      cy.get('button[type="submit"]').click();

      cy.xpath('//*[@id="app"]/div/div/div[2]/form/div[1]').should('be.visible')
      .log('Invite team members');
      cy.get('input[type="email"]').type('aka@gmail.com');
      cy.get('.mdi-chevron-down mdi v-icon notranslate v-theme--light v-icon--size-default').click();
      /*cy.get('#input-48').type('akk');
      cy.get('input[type="button"]').should('be.disabled')
      .log('Add member');
      */
     
      cy.get('button[type="submit"]').should('be.enabled')
      .log('Next');
      cy.get('button[type="submit"]').click();



      //cy.get('input[placeholder="Seach for truckers by SCAC"]').type('AAAA');
      //cy.get('#checkbox-54').click();
      //cy.get('#checkbox-69').click();
      //cy.get('input[type="text"]').click().type('Where the trucker');
      cy.wait(10000);
      cy.get('button[type="submit"]').click();

      cy.xpath('//*[@id="app"]/div/div/div[2]/form/div[1]').should('be.visible')
      .log('Required onboarding documents');
      cy.wait(10000);
      cy.get('button[type="submit"]').should('be.visible')
      .log('Create workspace');
      
    })

    it('invalid regestration' , () => {

        cy.visit(url);
        cy.contains('Sign up').click();
        cy.contains('Next').should('be.disabled')
        .log('Next')
        cy.get('#input-8').type(exam);
        cy.get('input[type="email"]').type('akas@');
        cy.contains('Invalid e-mail').should('be.visible')
        .log('Invalid email')


       







    })
  
    
  }
);