import { act, render, screen } from "@testing-library/react";
import Home from "./page";
import { mockHouses } from "@/mocks/houses";

describe("Home", () => {
  it("Loads houses correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockHouses),
    });

    await act(async () => {
      render(await Home());
    });

    expect(
      screen.getByText("This house has no sworn members")
    ).toBeInTheDocument();

    expect(screen.getByText("Loading Sworn Members...")).toBeInTheDocument();
  });
});
