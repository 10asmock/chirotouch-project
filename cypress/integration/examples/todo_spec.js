
describe("ToDo Base Application", () => {
  it("Shows the Header", () => {
    cy.visit("http://127.0.0.1:8081/");
    cy.get(".grocery-list")
      .should("have.text", "Grocery List");
  });
});
