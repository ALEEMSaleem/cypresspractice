describe('find', () => {

it('solution', () => {

    cy.visit("http://demo.automationtesting.in/");
    cy.get("#btn2").should("be.visible").click();
    cy.get("input[placeholder='First Name']").type("aleem");
    cy.get("input[placeholder='Last Name']").type("mian");
    cy.get('textarea[rows="3"]').type('virginia');
    cy.get('textarea[rows="3"]').should('have.text', 'virginia');
    cy.get('input[type="email"]').type('usmankarim@gmil.com');
    








})


})