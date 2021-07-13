context('Authentication', () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/login');
    });

    it('User logs in with right credentials', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it('User logs in with incorrect credentials', () => {

    })
});