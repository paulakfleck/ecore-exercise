import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MembersList from './MembersList';

describe('MembersList component', () => {
    test('aaaa', () => {

    })
    test('renders "members" ul successfully', async () => {
        const mockMembers = ["b12fa35a-9c4c-4bf9-8f32-27cf03a1f190", "371d2ee8-cdf4-48cf-9ddb-04798b79ad9e"];

        // <ul> should render, by empty. MemberDetails checks for all nested children.
        const { container } = render(<Router><MembersList members={mockMembers} filterMembers='' /></Router>);
        expect(container.firstChild).toBeEmptyDOMElement();
    })

    test('renders "No members found." if request failed', async () => {
        render(<Router><MembersList  /></Router>);

        const errorMsg = screen.getByText('No members found.');
        expect(errorMsg).toBeInTheDocument();
    })
})