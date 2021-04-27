import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n/config";
//components
import App from "./App";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Pagination from "./components/Pagination";
import CreateNewUser from "./components/CreateNewUser";

const renderWithRouter = (component: JSX.Element) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </Router>
    ),
  };
};

test("Header component render title and languages buttons", () => {
  const { getByText, getByRole } = renderWithRouter(<Header />);
  expect(
    getByRole("button", { name: /change page language to English/i })
  ).toBeInTheDocument();
  expect(
    getByRole("button", { name: /change page language to Spanish/i })
  ).toBeInTheDocument();
  expect(getByText(/Fetch them all/i)).toBeInTheDocument();
});

test("Page Header renders page title and create new user button", async () => {
  const { getByText } = renderWithRouter(
    <PageHeader title={"User List"} showButton={true} />
  );
  expect(getByText(/User List/i)).toBeInTheDocument();
  expect(getByText(/Create New user/i)).toBeInTheDocument();
});

test("Click on Create New User button opens Create New User Page", () => {
  const { getByRole } = renderWithRouter(<App />);
  fireEvent.click(getByRole("link", { name: "Create New User" }));
  expect(screen.getByText(/Create New User Page/i)).toBeInTheDocument();
});

test("Pagination have 5 buttons and second button is active", async () => {
  const { getByText, findAllByRole } = renderWithRouter(
    <Pagination setCurrentPage={() => {}} totalPages={5} currentPage={2} />
  );
  expect(await findAllByRole("button")).toHaveLength(5);
  expect(getByText(/2/i)).toHaveClass("active-page");
});

test("Create New User Page renders form", () => {
  const { getByRole, getByLabelText } = renderWithRouter(<CreateNewUser />);

  expect(getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(getByLabelText(/Last Name/i)).toBeInTheDocument();
  expect(getByLabelText(/Occupation/i)).toBeInTheDocument();
  expect(getByLabelText(/Date of Birth/i)).toBeInTheDocument();
  expect(getByRole("button", { name: "Create New User" })).toBeInTheDocument();
});
