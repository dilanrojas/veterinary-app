describe("Pet Profile Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
    cy.visit("/petlist");
    cy.getBySel("view-details-button").first().click();
  });

  it("should have the correct pet data structure", () => {
    cy.getBySel("pet-name").should("be.visible");
    cy.getBySel("pet-type").should("be.visible");
    cy.getBySel("pet-breed").should("be.visible");
    cy.getBySel("pet-age").should("be.visible");
    cy.getBySel("pet-weight").should("be.visible");
    cy.getBySel("pet-image").should("be.visible");
    cy.getBySel("next-appointment").should("be.visible");
  });

  it("should load the pet data", () => {
    cy.getBySel("pet-name").should("contain", "Tobby");
    cy.getBySel("pet-breed").should("contain", "Labrador");
    cy.getBySel("pet-age").should("contain", "7 years");
    cy.getBySel("pet-weight").should("contain", "32 kg");
    cy.getBySel("next-appointment").should("contain", "Friday, February 26th");
  });

  it("should render the pet profile page", () => {
    cy.getBySel("pet-profile-page").should("be.visible");
  });

  it("should display tabs for navigation", () => {
    cy.getBySel("tab-summary").should("be.visible");
    cy.getBySel("tab-vaccines").should("be.visible");
    cy.getBySel("tab-visits").should("be.visible");

    cy.getBySel("tab-vaccines").click();
    cy.getBySel("vaccines-list").should("be.visible");
    cy.getBySel("vaccine-item").should("have.length", 2);

    cy.getBySel("tab-visits").click();
    cy.getBySel("visits-list").should("be.visible");
    cy.getBySel("visit-item").should("have.length", 2);
  });
});
