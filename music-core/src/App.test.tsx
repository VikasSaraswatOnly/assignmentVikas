import { render, screen } from "@testing-library/react";
import MusicLibrary from "./App";

test("renders Music Library heading", () => {
    render(<MusicLibrary />);
    expect(screen.getByText(/Music Library/i)).toBeInTheDocument();
});
