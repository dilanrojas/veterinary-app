describe("Welcome Page Component Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the veterinary clinic name and description", () => {
    cy.getBySel("header").should("be.visible");
    cy.getBySel("clinic-name").should("contain", "Paws & Claws");
    cy.getBySel("clinic-description").should("be.visible");
    cy.getBySel("clinic-description").should(
      "contain",
      "A comprehensive veterinary management clinic providing world-class care for your pets. Over 15 years of experience with certified specialists dedicated to your pet's wellbeing.",
    );
  });

  it("should display the services offered", () => {
    cy.getBySel("services").should("be.visible");
    cy.getBySel("service-card").should("be.visible");
    cy.getBySel("service-card").should("have.length", 4);
  });

  it("should have navigation to login page ", () => {
    cy.getBySel("book-appointment-button").click();
    cy.location("pathname").should("eq", "/authlogin");
  });
});
