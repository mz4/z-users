const userDetails = '[data-testid="userDetails"]';
const btnClose = '[data-testid="btnClose"]';
const btnNew = '[data-testid="btnNew"]';
const btnSubmit = '[data-testid="submitForm"]';
const inputEmail = '[data-testid="email"]';
const inputFirstName = '[data-testid="firstName"]';
const inputLastName = '[data-testid="lastName"]';

describe('Add a new user ', () => {
  before(() => {
    cy.visit('/');
  });
  it('Show error in the email field', () => {
    cy.get(btnNew).click();
    cy.get(inputEmail).type(`mark.knop.com`);
    cy.contains('Please insert a valid email');
    cy.get(inputEmail).clear();
    cy.contains('email is required');
    cy.get(btnClose).click();
  });
  it('Show error in first name field', () => {
    cy.get(btnNew).click();
    cy.get(inputFirstName).type(`mark`);
    cy.get(inputFirstName).clear();
    cy.contains('Please enter first name');
    cy.get(btnClose).click();
  });
  it('Show error in last name field', () => {
    cy.get(btnNew).click();
    cy.get(inputLastName).type(`knop`);
    cy.get(inputLastName).clear();
    cy.contains('Please enter last name');
    cy.get(btnClose).click();
  });
  it('Submit new user form', () => {
    cy.get(btnNew).click();
    cy.get(inputEmail).type(`mark.knop@gmail.com`);
    cy.get(inputFirstName).type(`mark`);
    cy.get(inputLastName).type(`knop`);
    cy.get(btnSubmit).click();
    cy.get(userDetails).should('have.length', 15);
    cy.get(userDetails).last().contains('mark');
  });
});
