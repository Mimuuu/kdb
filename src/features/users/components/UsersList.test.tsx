import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UsersList from './UsersList';
import { User } from '../types';

const mockEmptyUsers: User[] = [];
const mockUsers: User[] = [
  {
    id: 1,
    name: "Shia Labeouf",
    username: "sl",
    phone: "123",
    email: "shia@something.com",
  },
  {
    id: 2,
    name: "Brie Larson",
    username: "brie",
    phone: "456",
    email: "brielarson@something.com",
  },
  {
    id: 3,
    name: "Will Smith",
    username: "willy",
    phone: "789",
    email: "willy@something.com",
  },
];

test("should render empty text when the users list is empty", () => {
  render(<UsersList users={mockEmptyUsers} />);
  const emptyTxt = screen.getByText(/No users found/i);
  expect(emptyTxt).toBeInTheDocument();
});

test("should not render empty text when the users list is not empty", () => {
  render(<BrowserRouter><UsersList users={mockUsers} /></BrowserRouter>);
  const emptyTxt = screen.queryByText(/No users found/i);
  expect(emptyTxt).not.toBeInTheDocument();
});

test("should render the correct amount of users in the list", () => {
  render(<BrowserRouter><UsersList users={mockUsers} /></BrowserRouter>);
  const list = screen.getByTestId("users-list");
  expect(list.childNodes.length).toBe(mockUsers.length);
});

// not sure if those should be separated into separate tests or not
test("should filter list properly when user enter data in the filter input", () => {
  render(<BrowserRouter><UsersList users={mockUsers} /></BrowserRouter>);
  const input = screen.getByTestId("filter-input");
  const list = screen.getByTestId("users-list");

  // no result
  fireEvent.change(input, { target: { value: "string that does not match any user" } });
  expect(list.childNodes.length).toBe(0);

  // name
  fireEvent.change(input, { target: { value: "larson" } });
  expect(list.childNodes.length).toBe(1);

  // username
  // actually caught a lowerCase bug doing this one, very good
  fireEvent.change(input, { target: { value: "bRiE" } });
  expect(list.childNodes.length).toBe(1);
});
