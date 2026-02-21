describe("AuthLogin Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
  });

  it("should display login form", () => {
    cy.getBySel("login-form").should("be.visible");
  });

  it("should validate client data", () => {
    cy.getBySel("loginUser-button").click();
    cy.getBySel("error-message")
      .should("be.visible")
      .and("contain", "Error while trying to login");
  });

  it("should navigate between login and sign up pages", () => {
    cy.getBySel("login-button").click();
    cy.getBySel("login-form").should("be.visible");

    cy.getBySel("signup-button").click();
    cy.getBySel("signup-form").should("be.visible");
  });

  it("should navigate to home page on successful login", () => {
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
    cy.location("pathname").should("eq", "/home");
  });

  it("should protect private routes", () => {
    cy.visit("/home");
    cy.location("pathname").should("eq", "/authlogin");

    cy.visit("/clientprofile");
    cy.location("pathname").should("eq", "/authlogin");

    cy.visit("/petlist");
    cy.location("pathname").should("eq", "/authlogin");
  });
});
