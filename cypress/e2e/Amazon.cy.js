


describe('demo', () =>
{
    

    it('test1', () =>
    {
        cy.visit('https://www.techlistic.com/p/selenium-practice-form.html');

        cy.get('input[name="firstname"]').type('Akash');
        cy.get('input[name="lastname"]').type('Kumar');
        cy.get('#sex-0').click();


    

    })


})








