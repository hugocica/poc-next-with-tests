import { render, screen } from "@testing-library/react";

import Home from ".";

describe("teste inicial home", () => {
  it("should render", () => {
    render(<Home />);

    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
