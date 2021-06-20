import { render, screen } from '@testing-library/react';
import Post from './Post';
import { Post as PostType } from '../types';

const mockPost: PostType = {
  body: "post content",
  id: 1,
  title: "post title",
  userId: 4,
};

test("should render the post title", () => {
  render(<Post p={mockPost} />);
  const name = screen.getByText(mockPost.title);
  expect(name).toBeInTheDocument();
});

test("should render the post body", () => {
  render(<Post p={mockPost} />);
  const name = screen.getByText(mockPost.body);
  expect(name).toBeInTheDocument();
});
