import { render } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation and home page', () => {
  const { container } = render(<App />);

  expect(container).toHaveTextContent('Bartłomiej Barański');
  expect(container).toHaveTextContent('About me');
  expect(container).toHaveTextContent('Projects');
});
