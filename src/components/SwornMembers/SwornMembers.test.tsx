import { act, render, screen } from "@testing-library/react";

import { mockAliveCharacter, mockDeadCharacter } from "@/mocks/character";
import SwornMembers from ".";

describe("SwornMembers", () => {
  it("Shows", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockAliveCharacter),
    });

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockDeadCharacter),
    });

    await act(async () => {
      render(
        await SwornMembers({
          swornMembersApiURLs: ["1", "2"],
        })
      );
    });

    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(
      screen.getByText("Died In 298 AC, at King's Landing")
    ).toBeInTheDocument();
  });
});
