import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import JobForm from "../../../Week-03/FE-04-React-App-Development-with-AI/app/src/components/JobForm.jsx";

describe("JobForm", () => {
  it("renders the required form fields", () => {
    render(
      <JobForm
        onSave={vi.fn()}
        onClose={vi.fn()}
      />
    );

    expect(screen.getByLabelText("Company Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Job Role")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
  });
});
it("does not submit when required fields are empty", () => {
  const onSave = vi.fn();

  render(
    <JobForm
      onSave={onSave}
      onClose={vi.fn()}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "Add Application" }));

  expect(onSave).not.toHaveBeenCalled();
});
it("submits trimmed form data", () => {
  const onSave = vi.fn();

  render(
    <JobForm
      onSave={onSave}
      onClose={vi.fn()}
    />
  );

  fireEvent.change(screen.getByLabelText("Company Name"), {
    target: { value: "  Google  " },
  });

  fireEvent.change(screen.getByLabelText("Job Role"), {
    target: { value: "  Software Developer Intern  " },
  });

  fireEvent.change(screen.getByLabelText("Location"), {
    target: { value: "  Remote  " },
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Application" }));

  expect(onSave).toHaveBeenCalledWith({
    company: "Google",
    role: "Software Developer Intern",
    location: "Remote",
    status: "Applied",
  });
});
it("uses Not specified when location is empty", () => {
  const onSave = vi.fn();

  render(
    <JobForm
      onSave={onSave}
      onClose={vi.fn()}
    />
  );

  fireEvent.change(screen.getByLabelText("Company Name"), {
    target: { value: "Microsoft" },
  });

  fireEvent.change(screen.getByLabelText("Job Role"), {
    target: { value: "Frontend Intern" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Application" }));

  expect(onSave).toHaveBeenCalledWith({
    company: "Microsoft",
    role: "Frontend Intern",
    location: "Not specified",
    status: "Applied",
  });
});
it("renders edit mode with initial data", () => {
  render(
    <JobForm
      initialData={{
        company: "Google",
        role: "Software Engineer",
        location: "Remote",
        status: "Interview",
      }}
      onSave={vi.fn()}
      onClose={vi.fn()}
    />
  );

  expect(
    screen.getByRole("heading", { name: "Edit Application" })
  ).toBeInTheDocument();

  expect(screen.getByLabelText("Company Name")).toHaveValue("Google");
  expect(screen.getByLabelText("Job Role")).toHaveValue("Software Engineer");
  expect(screen.getByLabelText("Location")).toHaveValue("Remote");
  expect(screen.getByLabelText("Status")).toHaveValue("Interview");

  expect(
    screen.getByRole("button", { name: "Save Changes" })
  ).toBeInTheDocument();
});
it("submits the selected application status", () => {
  const onSave = vi.fn();

  render(
    <JobForm
      onSave={onSave}
      onClose={vi.fn()}
    />
  );

  fireEvent.change(screen.getByLabelText("Company Name"), {
    target: { value: "Amazon" },
  });

  fireEvent.change(screen.getByLabelText("Job Role"), {
    target: { value: "SDE Intern" },
  });

  fireEvent.change(screen.getByLabelText("Status"), {
    target: { value: "Interview" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Application" }));

  expect(onSave).toHaveBeenCalledWith({
    company: "Amazon",
    role: "SDE Intern",
    location: "Not specified",
    status: "Interview",
  });
});
it("calls onClose when Cancel is clicked", () => {
  const onClose = vi.fn();

  render(
    <JobForm
      onSave={vi.fn()}
      onClose={onClose}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: "Cancel" }));

  expect(onClose).toHaveBeenCalledTimes(1);
});