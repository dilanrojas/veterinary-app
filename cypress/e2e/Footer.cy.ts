describe("Header Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
  });

  it("should display navigation links for logged-in user", () => {
    cy.getBySel("link-petlist").should("be.visible").click();
    cy.location("pathname").should("eq", "/petlist");

    cy.getBySel("link-home").should("be.visible").click();
    cy.location("pathname").should("eq", "/home");

    cy.getBySel("link-clientprofile").should("be.visible").click();
    cy.location("pathname").should("eq", "/clientprofile");
  });

  it("footer should be visible on every page", () => {
    const pages = ["/home", "/petlist", "/clientprofile", "/petlist/1"];

    pages.forEach((page) => {
      cy.visit(page);
      cy.getBySel("footer").should("be.visible");
    });
  });

  it("should display footer information", () => {
    cy.getBySel("footer-info").should("be.visible");
    cy.getBySel("footer-info")
      .contains("© 2024 Paws & Claws Veterinary Clinic. All rights reserved.")
      .should("be.visible");
    cy.getBySel("footer-info")
      .contains("Designed for the best friends in your life.")
      .should("be.visible");
  });
});
