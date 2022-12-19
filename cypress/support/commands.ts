/// <reference types="cypress" />
import user from '../fixtures/login.json';
import { loginEmail, loginPassword, btnSubmit } from '../fixtures/user';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<Element>
    }
  }
}

Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.contains('Welcome');
  cy.url().should('include', '/login');
  cy.get(loginEmail).clear();
  cy.get(loginPassword).clear();
  cy.get(loginEmail).type(user.rightuser.email);
  cy.get(loginPassword).type(user.rightuser.password);
  cy.get(btnSubmit).click();
});
