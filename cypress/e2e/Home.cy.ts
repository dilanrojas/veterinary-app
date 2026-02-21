describe("Home Page Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
  });

  it("should display the Home component", () => {
    cy.getBySel("home-page").should("be.visible");
  });

  it("should display personalized welcome message", () => {
    cy.getBySel("welcome-message")
      .should("be.visible")
      .and("contain.text", "Welcome back, Brian Porras!");
  });

  it("should display total pets count", () => {
    cy.getBySel("total-pets-count").should("be.visible").and("contain", "4");
  });

  it("should display quick access buttons", () => {
    cy.getBySel("my-pets-card").should("be.visible");
    cy.getBySel("my-pets-card-button").should("be.visible").click();
    cy.location("pathname").should("eq", "/petlist");
    cy.visit("/home");
    cy.getBySel("my-profile-card").should("be.visible");
    cy.getBySel("my-profile-card-button").should("be.visible").click();
    cy.location("pathname").should("eq", "/clientprofile");
  });
});
