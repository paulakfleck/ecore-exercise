import { render, screen } from '@testing-library/react';
// import { createRoot } from 'react-dom/client';
import Welcome from './Welcome';

describe('Welcome component', () => {
    test('renders "Welcome" correctly', () => {
        render(<Welcome />);

        const el = screen.getByText('Here you can access teams, team members, and members inside the teams.', {exact: true});

        expect(el).toBeInTheDocument();
    })
})