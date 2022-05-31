import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom';

import MainHeader from './MainHeader';

describe('MainHeader component', () => {
    test('renders "Welcome!" menu correctly', () => {
        render(<Router><MainHeader /></Router>);

        const el = screen.getByText('Welcome!', {exact: true});

        expect(el).toBeInTheDocument();
    })

    test('renders "teams" menu correctly', () => {
        render(<Router><MainHeader /></Router>);

        const el = screen.getByText('Teams', {exact: true});

        expect(el).toBeInTheDocument();
    })
})