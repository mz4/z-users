const userDetails = '[data-testid="userDetails"]';
const usersList = '[data-testid="usersList"]';
const modal = '[data-testid="modal"]';
const btnClose = '[data-testid="btnClose"]';

describe('Users list', () => {
  before(() => {
    cy.visit('/');
  });
  it('Load page successfully', () => {
    cy.get(userDetails).should('have.length', 15);
  });
  it('Users are sorted', () => {
    cy.get(userDetails).first().contains('Georgie');
  });
  it('open and close side panel details', () => {
    cy.get(userDetails).first().click();
    cy.get(btnClose).click();
    cy.get(userDetails).eq(3).click();
    cy.get(modal).click(10, 10);
  });
});
