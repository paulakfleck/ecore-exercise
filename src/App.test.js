import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {

    test('should render home page', () => {
        render(<App />);

        expect(screen.getByText(/welcome to this e-core exercise!/i)).toBeInTheDocument()
    });
});