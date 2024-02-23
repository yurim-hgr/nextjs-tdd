"use client";

import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewMessageForm from "./NewMessageForm";

describe("<NewMessageForm />", () => {
  describe("clicking the send button", () => {
    let sendHandler;

    async function sendMessage() {
      const user = userEvent.setup();
      sendHandler = jest.fn().mockName("sendHandler");

      render(<NewMessageForm onSend={sendHandler} />);
      await act(async () => {
        await user.type(screen.getByTestId("messageText"), "New message");
        await user.click(screen.getByTestId("sendButton"));
      });
    }

    it("clears the text field", async () => {
      await sendMessage();
      expect(screen.getByTestId("messageText").value).toEqual("");
    });

    it("calls the send handler", async () => {
      await sendMessage();
      expect(sendHandler).toHaveBeenCalledWith("New message");
    });
  });
});
