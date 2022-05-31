import { render, screen, waitFor, act, rerender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { when } from 'jest-when';


import TeamDetails from './TeamDetails';

window.fetch = jest.fn();
const oldFetch = window.fetch;

describe('TeamDetails component', () => {
    test('renders "team" and "team members" successfully', async () => {
        const mockFetchTeam = {
            "id": "7676a4bf-adfe-415c-941b-1739af07039b",
            "name": "Ordinary Coral Lynx",
            "teamLeadId": "b12fa35a-9c4c-4bf9-8f32-27cf03a1f190",
            "teamMemberIds": [
                "b12fa35a-9c4c-4bf9-8f32-27cf0661f190"
            ]
        };

        const mockFetchMember1 = {
            "id": "b12fa35a-9c4c-4bf9-8f32-27cf03a1f190",
            "firstName": "Emmett",
            "lastName": "Douglas",
            "displayName": "emmettDouglas",
            "avatarUrl": "https://cdn.fakercloud.com/avatars/alessandroribe_128.jpg",
            "location": "South Margarita"
        };
        const mockFetchMember2 = {
            "id": "b12fa35a-9c4c-4bf9-8f32-27cf0661f190",
            "firstName": "Emmett",
            "lastName": "Douglas",
            "displayName": "emmettDouglas",
            "avatarUrl": "https://cdn.fakercloud.com/avatars/alessandroribe_128.jpg",
            "location": "South Margarita"
        };


        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockFetchTeam
        });
        
        render(<Router><TeamDetails /></Router>);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.getByText("No members found.")).toBeInTheDocument();
        // expect(await screen.findByText("Ordinary Coral Lynx")).toBeInTheDocument();
        // expect(await screen.findByText("Loading..."')).toBeInTheDocument();
        
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockFetchMember1
        });

        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockFetchMember2
        });
        
        await waitFor(() => {
            expect(screen.findByText("Ordinary Coral Lynx")).toBeInTheDocument();
            expect(screen.getByText("South Margarita")).toBeInTheDocument();
            screen.debug();
        });


        // const view = render(<Router><TeamDetails /></Router>);

        // await waitFor(() => {

        //     // act(() => {
        //     //     window.fetch.mockResolvedValueOnce({
        //     //         ok: true,
        //     //         json: async () => mockFetchMember
        //     //     });

        //     //     jest.runAllTimers();

        //     //     expect(screen.getByText("South Margarita")).toBeInTheDocument();
        //     //   });

        //     // expect(screen.getByText("Ordinary Coral Lynx")).toBeInTheDocument();

        //     // rerender(<Router><TeamDetails /></Router>);

        //     // const itemElement = await screen.findByRole('listitem');
        //     // expect(itemElement).toBeInTheDocument();
        // });

    })

    // test('renders empty "members"', () => {
    //     const membersMock =  [];
    //     render(<Router><MembersList members={membersMock} /></Router>);

    //     const el = screen.getByText('No members found.');

    //     expect(el).toBeInTheDocument();
    // })
})