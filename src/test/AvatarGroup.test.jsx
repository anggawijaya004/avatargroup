import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AvatarGroup from "../components/AvatarGroup";

describe("Avatar Group", () => {
  const users = [
    "Calos Tevez",
    "Luis Suarez",
    "Edison Cavani",
    "Abdur Rasyid",
    "Najwa Syihab",
  ];
  const maxLength = 4;
  const size = "md";

  it("renders initials correctly", () => {
    render(<AvatarGroup users={users} maxLength={maxLength} size={size} />);
    expect(screen.getByTestId("avatar-0").textContent).toBe("CT");
    expect(screen.getByTestId("avatar-1").textContent).toBe("LS");
  });

  it("renders size correctly", () => {
    render(<AvatarGroup users={users} maxLength={maxLength} size={size} />);
    expect(getComputedStyle(screen.getByTestId("avatar-0")).width).toBe("32px");
  });

  it("renders size correctly", () => {
    render(<AvatarGroup users={users} maxLength={maxLength} size="md" />);
    expect(getComputedStyle(screen.getByTestId("avatar-0")).width).toBe("32px");
  });

  it("renders maxLength correctly", () => {
    render(<AvatarGroup users={users} maxLength={maxLength} size={size} />);
    expect(screen.getAllByRole("child").length).toBe(maxLength);
  });

  it("snapshot", () => {
   const result = render(<AvatarGroup users={users} maxLength={maxLength} size={size} />);
    expect(result).toMatchSnapshot();
  });
});
