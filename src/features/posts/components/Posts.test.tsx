import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import { Post } from '../types';

const mockEmptyPosts: Post[] = [];
const mockPosts: Post[] = [
  {
    id: 1,
    title: "title",
    body: "body",
    userId: 1,
  },
  {
    id: 2,
    title: "title",
    body: "body",
    userId: 1,
  },
  {
    id: 3,
    title: "title",
    body: "body",
    userId: 1,
  },
];

test("should render empty text when the posts list is empty", () => {
  render(<Posts posts={mockEmptyPosts} />);
  const emptyTxt = screen.getByText(/This user has not posted anything yet/i);
  expect(emptyTxt).toBeInTheDocument();
});

test("should not render empty text when the posts list is not empty", () => {
  render(<Posts posts={mockPosts} />);
  const emptyTxt = screen.queryByText(/This user has not posted anything yet/i);
  expect(emptyTxt).not.toBeInTheDocument();
});

test("should render the correct amount of posts in the list", () => {
  const { container } = render(<Posts posts={mockPosts} />);
  const component = container.firstChild;
  expect(component?.childNodes.length).toBe(mockPosts.length);
});
