import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MemberDetails from './MemberDetails';

describe('MemberDetails component', () => {
    test('renders a "member" if request succeed', async () => {
        const mockMemberDetail = {
            "id": "7fe21710-316b-46d8-9a84-13e8b7c39153",
            "firstName": "Leanna",
            "lastName": "Windler",
            "displayName": "leannaWindler",
            "avatarUrl": "https://cdn.fakercloud.com/avatars/ernestsemerda_128.jpg",
            "location": "Schoenport"
        };

        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            ok: true,
			json: async () => mockMemberDetail
		});

        render(<Router><MemberDetails member={mockMemberDetail['id']} filter='' /></Router>);

        await waitFor(() => {
            const locationMsg = screen.getByText(mockMemberDetail['location']);
            expect(locationMsg).toBeInTheDocument();
        });
    })
});