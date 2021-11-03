import Upload from './Upload';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('while logged out, users cannot access upload videos route', () => {
  render(<Upload loggedIn={false} />);
  expect(screen.getByRole('heading')).toHaveTextContent(
    'sign in to upload videos'
  );
});

test('while logged in, users can access upload videos route', () => {
  render(<Upload loggedIn={true} />);
  expect(screen.getByRole('heading')).toHaveTextContent('Press + to continue');
});
