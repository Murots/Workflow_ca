describe("Login and Access Profile", () => {
  it("should log in and access the profile", () => {
    cy.visit("https://murots.github.io/Workflow_ca/");
    cy.wait(1000);
    cy.get("[data-auth=login]").click({ multiple: true, force: true });
    cy.wait(1000);
    cy.get("#registerModal").should("not.be.visible");
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type("testSoMe123@stud.noroff.no");
    cy.get("#loginPassword").type("testSoMe123");
    cy.get("button[type=submit]").contains("Login").click();
  });
});