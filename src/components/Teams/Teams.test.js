import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

import Teams from './Teams';

describe('Teams component', () => {
    test('renders "filter" correctly', () => {
        render(<Router><Teams /></Router>);

        const el = screen.getByPlaceholderText('Filter by Team name');

        expect(el).toBeInTheDocument();
    })

    test('renders "teams" if request succeed', async () => {
        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            ok: true,
			json: async () => [
                {
                    "id": "7676a4bf-adfe-415c-941b-1739af07039b",
                    "name": "Ordinary Coral Lynx"
                }
            ],
		});

        render(<Router><Teams /></Router>);

        const itemElement = await screen.findByRole('listitem');
		expect(itemElement).toBeInTheDocument();
    })
    
    test('renders "Something went wrong" if request failed', async () => {
        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            ok: false,
			json: async () => ['12334555', '22334112']
		});

        render(<Router><Teams /></Router>);

        const errorMsg = await screen.findByText('Something went wrong');
		expect(errorMsg).toBeInTheDocument();
    })
})