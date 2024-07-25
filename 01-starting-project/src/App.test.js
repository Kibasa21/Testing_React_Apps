import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {//this function is a test case that tests if the app component renders the learn react link
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);//i is for case insensitive, it means it will match Learn React, learn react, LEARN REACT etc.
  expect(linkElement).toBeInTheDocument();//this is the assertion that checks if the linkElement is in the document
});
