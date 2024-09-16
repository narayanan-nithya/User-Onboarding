describe('useronboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    })

    const nameInput = () => cy.get('input[name = username]');
    const emailInput = () => cy.get('input[name= email]');
    const passwordInput = () => cy.get('input[name = password]');
    const tosBox = () => cy.get ('input[name=tos]')
    const submitBtn = () => cy.get('input[type = submit]')

    it('Make sure the elements show', () => {

        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosBox().should('exist');
        submitBtn().should('exist');

    })

    it ('Inputs work?', () => {
        nameInput().should('have.value', '')
                    .type('text')
                    .should('have.value', 'text');
        emailInput().should('have.value', '')
                    .type('text')
                    .should('have.value', 'text');      
        passwordInput().should('have.value', '')
                    .type('text')
                    .should('have.value', 'text');  
        tosBox().should('not.be.disabled')
        submitBtn().should('not.be.disabled')
                        
    })


describe('Adding a new friend', () => {
    it('Can add a new user', () => {
        nameInput().type('text');
        emailInput().type('text');
        passwordInput().type('text');
        tosBox().check();
        submitBtn().click();
        })

})

describe('Let\'s validate our new user', () => {
    it('Can submit and grey out the inputs', () => {
        nameInput().should('have.value','');
        emailInput().should('have.value','');
        passwordInput().should('have.value','');
        tosBox().check();
        submitBtn().should('not.be.disabled');
        })
})

})
