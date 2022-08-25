/// <reference types="cypress" />
describe('practice', ( )=> {
    it('practicing cypress', () =>{

    //    cy.visit('https://the-internet.herokuapp.com/');
    //    cy.wait(1000);
    //    cy.get(':nth-child(1) > a').should("be.visible").click();
    //    cy.go('back');
    //    cy.get('a[href="/add_remove_elements/"]').should("be.visible").click();
    //    cy.wait(1000);
    //    cy.go(-1);
    //    cy.wait(1000);
    //    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
      // cy.visit('Basic YWRtaW46YWRtaW4=','https://the-internet.herokuapp.com/basic_auth');

       //cy.visit ('https://www.techbeamers.com/websites-to-practice-selenium-webdriver-online/');
       //cy.get("img[class='aligncenter']").click();
       //cy.wait(1000);
       //cy.get("a[rel='noopener']").click();

       cy.visit("http://demo.automationtesting.in/");
       cy.get("#btn2").should("be.visible").click();
       cy.get('textarea[rows="3"').type('virginia').should('be.visible');
       cy.go(-1);
       cy.wait(2000);
       cy.get('#btn1').should('be.visible').click();
       cy.get("input[placeholder='E mail']").type('zakiraleem@yahoo.com');
       cy.get("input[placeholder='Password']").type('hero#1');
       cy.get("#enterbtn").should('be.visible').click();





    })









})