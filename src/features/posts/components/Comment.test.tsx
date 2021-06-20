import { render, screen } from '@testing-library/react';
import Comment from './Comment';
import { Comment as CommentType } from '../types';

const mockComment: CommentType = {
  body: "super comment",
  email: "w@w.com",
  id: 1,
  name: "author",
  postId: 34,
};

test("should render the comment author", () => {
  render(<Comment c={mockComment} />);
  const name = screen.getByText(mockComment.name);
  expect(name).toBeInTheDocument();
});

test("should render the post body", () => {
  render(<Comment c={mockComment} />);
  const name = screen.getByText(mockComment.body);
  expect(name).toBeInTheDocument();
});
