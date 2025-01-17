describe('Login Fail', () => {
  it('should show error message when logging in with invalid credentials', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('[data-auth=login]').click({ multiple: true, force: true });
    cy.wait(1000);
    cy.get('#loginModal').should('be.visible');
    cy.get('#loginEmail').type('testSoMe456@stud.noroff.no');
    cy.get('#loginPassword').type('testSoMe456');
    cy.get('button[type=submit]').contains('Login').click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
