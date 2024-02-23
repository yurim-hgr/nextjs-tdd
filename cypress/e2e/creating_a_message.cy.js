describe("Creating a message", () => {
  it("Displays the message in the list", () => {
    cy.visit("/message");

    cy.get('[data-testid="messageText"]').type("New message");

    cy.get('[data-testid="sendButton"]').click();

    cy.get('[data-testid="messageText"]').should("have.value", "");

    cy.contains("New message");
  });
});
