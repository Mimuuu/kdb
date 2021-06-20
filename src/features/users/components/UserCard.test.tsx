import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserCard from './UserCard';
import { User } from '../types';

const mockUser: User = {
  id: 1,
  name: "Shia Labeouf",
  username: "sl",
  phone: "123",
  email: "shia@something.com",
};

test("should render the user name and the name", () => {
  // have to wrap it around Router because I use <Link /> inside the component
  render(<BrowserRouter><UserCard u={mockUser} /></BrowserRouter>);
  const name = screen.getByText("sl (Shia Labeouf)");
  expect(name).toBeInTheDocument();
});

test("should render the user email", () => {
  render(<BrowserRouter><UserCard u={mockUser} /></BrowserRouter>);
  const email = screen.getByText("shia@something.com");
  expect(email).toBeInTheDocument();
});
