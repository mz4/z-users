import user from '../../fixtures/login.json';
import { loginEmail, loginPassword } from '../../fixtures/user';

describe('Login', () => {
  before(() => {
    cy.visit('/login');
  });
  it('Show an error in the email field', () => {
    cy.get(loginEmail).clear();
    cy.get(loginEmail).type(user.wronguser.email);
    cy.contains(user.wronguser.emailError1);
  });
  it('Show an error in the password field', () => {
    cy.get(loginPassword).clear();
    cy.contains(user.wronguser.passwordError1);
  });
  it('Complete the form', () => {
    cy.login();
  });
});
