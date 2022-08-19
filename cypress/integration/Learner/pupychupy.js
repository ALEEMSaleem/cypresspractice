/// <reference types="cypress" />
describe('practice', ( )=> {
    it('practicing cypress', () =>{

       //cy.visit('https://the-internet.herokuapp.com/');
       //cy.wait(5000);
       //cy.get(':nth-child(1) > a').should("be.visible").click();
       //cy.wait(5000);
       //cy.go('back');
       //cy.wait(5000);
       //cy.get('a[href="/add_remove_elements/"]').should("be.visible").click();
       //cy.wait(5000);
       //cy.go('back');

       cy.visit ('https://www.techbeamers.com/websites-to-practice-selenium-webdriver-online/');
       cy.get("img[class='aligncenter']").click();
       cy.wait(1000);
       cy.get("a[rel='noopener']").click();




    })









})