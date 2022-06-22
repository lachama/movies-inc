import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import AppContainer from '../../src/navigation/AppNavigation';

jest.useFakeTimers();

describe('AppStack', () => {
  it('renders App Stack', async () => {
    const {getByText} = render(<AppContainer />);
    await waitFor(() => getByText('Movies Streaming now'));
  });
});
