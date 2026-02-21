describe("Header Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
  });

  it("should display the veterinary logo and name", () => {
    cy.getBySel("logo").should("be.visible");
    cy.getBySel("logo").contains("Paws & Claws").should("be.visible");
  });

  it("should display navigation links for logged-in user", () => {
    cy.getBySel("petlist-link").should("be.visible").click();
    cy.location("pathname").should("eq", "/petlist");

    cy.getBySel("home-link").should("be.visible").click();
    cy.location("pathname").should("eq", "/home");

    cy.getBySel("clientprofile-link").should("be.visible").click();
    cy.location("pathname").should("eq", "/clientprofile");
  });

  it("header should be visible on every page", () => {
    const pages = ["/home", "/petlist", "/clientprofile", "/petlist/1"];

    pages.forEach((page) => {
      cy.visit(page);
      cy.getBySel("header").should("be.visible");
    });
  });
});
