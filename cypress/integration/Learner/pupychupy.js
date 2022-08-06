/// <reference types="cypress" />
describe('practice', ( )=> {
    it('practicing cypress', () =>{

        cy.visit('https://google.com');
        cy.get('input[class="gLFyf gsfi"]').type('sports');
        cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();

    })









})