import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../App';

jest.useFakeTimers();

describe('App', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders PlayNow screen', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => getByText('Movies Streaming now'));
  });
});
