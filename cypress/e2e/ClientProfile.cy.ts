describe("Client Profile Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
    cy.visit("/clientprofile");
  });

  it("should display client profile information correctly", () => {
    cy.getBySel("client-name")
      .should("have.value", "Brian Porras")
      .should("be.visible");
    cy.getBySel("client-username")
      .should("have.value", "brian")
      .should("be.visible");
    cy.getBySel("client-email")
      .should("have.value", "brianporras@gmail.com")
      .should("be.visible");
    cy.getBySel("client-phone")
      .should("have.value", "878763464")
      .should("be.visible");
    cy.getBySel("client-password")
      .should("have.value", "brian123")
      .should("be.visible");
  });

  it("should allow client to update profile information", () => {
    cy.getBySel("client-name").clear().type("Brian Updated");
    cy.getBySel("client-username").clear().type("brianupdated");
    cy.getBySel("client-email").clear().type("brianupdated@gmail.com");
    cy.getBySel("client-phone").clear().type("878763465");
    cy.getBySel("client-password").clear().type("brianupdated123");
    cy.getBySel("save-button").click();
    cy.getBySel("client-name")
      .should("have.value", "Brian Updated")
      .should("be.visible");
  });

  it("should validate changes before saving", () => {
    cy.getBySel("client-name").clear();
    cy.getBySel("save-button").click();
    cy.getBySel("error-message").should("be.visible");
  });
});
