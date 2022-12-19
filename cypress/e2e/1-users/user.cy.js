import user from '../../fixtures/user.json';
import {
  userDetails,
  btnClose,
  btnNew,
  btnSubmit,
  inputEmail,
  inputFirstName,
  inputLastName
} from '../../fixtures/user';

describe('Add a new user ', () => {
  before(() => {
    cy.login();
  });
  it('Show error in the email field', () => {
    cy.get(btnNew).click();
    cy.get(inputEmail).type(user.email1);
    cy.contains(user.emailError1);
    cy.get(inputEmail).clear();
    cy.contains(user.emailError2);
    cy.get(btnClose).click();
  });
  it('Show error in first name field', () => {
    cy.get(btnNew).click();
    cy.get(inputFirstName).type(user.firstName1);
    cy.get(inputFirstName).clear();
    cy.contains(user.firstNameError1);
    cy.get(btnClose).click();
  });
  it('Show error in last name field', () => {
    cy.get(btnNew).click();
    cy.get(inputLastName).type(user.lastName1);
    cy.get(inputLastName).clear();
    cy.contains(user.lastNameError1);
    cy.get(btnClose).click();
  });
  it('Submit new user form', () => {
    cy.get(btnNew).click();
    cy.get(inputEmail).type(user.email2);
    cy.get(inputFirstName).type(user.firstName1);
    cy.get(inputLastName).type(user.lastName1);
    cy.get(btnSubmit).click();
    cy.get(userDetails).last().contains(user.firstName1);
  });
});
