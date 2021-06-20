import { render, screen } from '@testing-library/react';
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
  render(<UsersList users={mockUsers} />);
  const emptyTxt = screen.queryByText(/No users found/i);
  expect(emptyTxt).not.toBeInTheDocument();
});

test("should render the correct amount of users in the list", () => {
  const { container } = render(<UsersList users={mockUsers} />);
  const component = container.firstChild;
  expect(component?.childNodes.length).toBe(mockUsers.length);
});
