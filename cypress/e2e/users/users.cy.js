import { userDetails, modal, btnClose, btnSort } from '../../fixtures/user';

describe('Users list', () => {
  before(() => {
    cy.visit('/');
  });
  it('Load page successfully', () => {
    cy.get(userDetails).should('have.length', 15);
  });
  it('sort users', () => {
    cy.get(userDetails).first().contains('Georgie');
    cy.get(btnSort).click();
    cy.get(userDetails).first().contains('Byron');
  });
  it('open and close side panel details', () => {
    cy.get(userDetails).first().click();
    cy.get(btnClose).click();
    cy.get(userDetails).eq(3).click();
    cy.get(modal).click(10, 10);
  });
});
