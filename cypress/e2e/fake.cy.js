/// <reference types = "cypress"/>
const xlsx=require('node-xlsx').default;
const fs= require('fake.cy.js');
const path=require('D:\AkashJegar\cypress\e2e\fake.cy.js');
const { reject } = require('cypress/types/bluebird');

module.exports=(on, config) =>{
    on('task', { parsexlsx({ filepath }) 
    { return new Promise((resolve, reject) =>
        {
            try
            {
              const jsonData=xlsx.parse(fs.readFileSync(filepath));
              resolve(jsonData);
            }catch (e)
            {
                reject(e);
            } });
        }});
    }


    describe('convert data to Json', () =>
    { it('read data from excel', () =>
    {
        cy.parsexlsx('cypress/fixturs/exceldata.xlsx').then((jsonData) =>
        {const rowlength=cypress.$(jsonData[0].data).length
            for(let index=0; index<rowlength; index++)
            {
                var jsonData= jsonData[index].data
                console.log(jsonData[index].data)
                cy.writeFile("cypress/fixturs/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
            }
        })
        })
    })

    Cypress.Commands.add("parseXlsx", (inputfile) =>{
        return cy.task('parsexlsx', {filepath: inputfile})
    });


    describe('conversion to json', () =>
    {it ('reading data from excel', () =>
    {
        cy.parsexlsx('cypress/fixturs/exceldata.xlsx').then((jsonData)=>
        {const rowlength=cypress.$(jsonData[0].data).length
            for(let index=0; index<rowlength; index++)
            {
                var jsonData= jsonData[index].data
                console.log(jsonData[index].data)
                cy.writeFile("cypress/fixturs/xlsxData.json", {username:jsonData[0][0], password:jsonData[0][1]})
            }
        })
        })
    })
    
    describe('read the data from json file', function()
    {
        it('hrm login', function()
        {
            cy.visit('https://ebpv3-69501.web.app/login');
            //cy.wait(5000);
            //cy.get('.drift-widget-controller-icon square').click();
            cy.get('.text-body-s-semibold').should('be.visible')
            .log('visible forgot password');
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
   
        }
        )
    }
    )

