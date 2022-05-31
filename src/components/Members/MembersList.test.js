import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MembersList from './MembersList';

describe('MembersList component', () => {
    test('renders "members" correctly', () => {
        const membersMock = [
            {
                "id": "b12fa35a-9c4c-4bf9-8f32-27cf03a1f190",
                "firstName": "Emmett",
                "lastName": "Douglas",
                "displayName": "emmettDouglas",
                "avatarUrl": "https://cdn.fakercloud.com/avatars/alessandroribe_128.jpg",
                "location": "South Margarita"
            },
            {
                "id": "371d2ee8-cdf4-48cf-9ddb-04798b79ad9e",
                "firstName": "Randy",
                "lastName": "Funk",
                "displayName": "randyFunk",
                "avatarUrl": "https://cdn.fakercloud.com/avatars/thomasschrijer_128.jpg",
                "location": "West Ericashire"
            }
        ];
        render(<Router><MembersList members={membersMock} /></Router>);

        const el = screen.getByText('South Margarita');

        expect(el).toBeInTheDocument();
    })

    test('renders empty "members"', () => {
        const membersMock =  [];
        render(<Router><MembersList members={membersMock} /></Router>);

        const el = screen.getByText('No members found.');

        expect(el).toBeInTheDocument();
    })
})