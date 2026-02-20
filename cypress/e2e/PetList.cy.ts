describe("Pet List Component Tests", () => {
  beforeEach(() => {
    cy.visit("/authlogin");
    cy.getBySel("email-input").type("brianporras@gmail.com");
    cy.getBySel("password-input").type("brian123");
    cy.getBySel("loginUser-button").click();
    cy.visit("/petlist");
  });

  it("should display the Pet List component", () => {
    cy.getBySel("pet-list-page").should("be.visible");
  });

  it("should display the user's pets", () => {
    cy.getBySel("pet-card").should("be.visible");
    cy.getBySel("pet-card").should("have.length", 4);
  });

  it("should navigate to pet details page when 'View Details' button is clicked", () => {
    cy.getBySel("view-details-button").first().click();
    cy.location("pathname").should("eq", "/petlist/401");
  });

  it("should have the pet information", () => {
    cy.getBySel("pet-name").first().should("contain", "Tobby");
    cy.getBySel("pet-appointment")
      .first()
      .should("contain", "Appt: Friday, February 26th");
  });

  it("should display the pet information", () => {
    cy.getBySel("pet-name").should("be.visible");
    cy.getBySel("pet-appointment").should("be.visible");
  });

  it("should handle empty pet list", () => {
    for (let i = 0; i < 4; i++) {
      cy.getBySel("view-details-button").first().click();
      cy.getBySel("remove-pet-button").click();
    }
    cy.getBySel("empty-pet-list").should("be.visible");
  });
});
