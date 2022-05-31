import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './../../hooks/useFetch'

import MembersList from '../Members/MembersList';
import Search from './../Search';

const TeamDetails = () => {
    const url = 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com';
    const teamId = useParams().team;
    const [team, setTeam] = useState({});
    const [membersList, setMembersList] = useState(true); // send as true the first time, so "no members found" won't show up
    const [isLoadingMembers, setIsLoadingMembers] = useState(false);
    const [errorMembers, setErrorMembers] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const getFilter = (searchValue) => {
        setSearchInput(searchValue);
    }

    const transformMembers = transformedTeam => {
        setTeam(transformedTeam);
        fetchMembersHandler(transformedTeam);
    }

    const { isLoading, error, fetchData: fetchTeam } = useFetch(`${url}/teams/${teamId}`, transformMembers);

    useEffect(() => {
        fetchTeam();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (team && Object.keys(team).length !== 0) {
                fetchMembersHandler(team);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn)
    }, [searchInput]);


    // I tried fetching multiple users in a single request, but I was not successful, so I had to make one call for each member.
    // Patterns I tried: "url/users/<id>,<id>" and "url/users/<id>/<id>"
    const fetchMembersHandler = async (transformedTeam) => {
        let tempMembersList = [];
        const memberIds = [transformedTeam.teamLeadId, ...transformedTeam.teamMemberIds];

        if (memberIds.length > 0) {
            setIsLoadingMembers(true);

            for (const memberId of memberIds) {
                const response = await fetch(`${url}/users/${memberId}`);

                if (!response.ok) {
                    setErrorMembers('Something went wrong while fetching team members.');
                    setIsLoadingMembers(false);
                    break;
                }

                const data = await response.json();

                
                tempMembersList = [...tempMembersList, data];
            }

            const filteredMembersList = tempMembersList.filter((member) => {
                // Filter by first or last name
                if ((member.firstName.toLowerCase().includes(searchInput.toLowerCase())) || (member.lastName.toLowerCase().includes(searchInput.toLowerCase()))) {
                    return transformedTeam;
                }
            });

            setMembersList(filteredMembersList);
            setIsLoadingMembers(false);
        }
    };

    return (
        <React.Fragment>
            <div>
                <h1>Team: <span>{team.name}</span></h1>

                <Search sendFilter={getFilter} placeholder="Filter by Team name" />

                {isLoadingMembers && <p className="loading">Loading...</p>}
                {!isLoadingMembers && errorMembers && <p>{errorMembers}</p>}
                {!isLoadingMembers && !errorMembers && <MembersList members={membersList} />}

            </div>

            {isLoading && <p className="loading">Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
        </React.Fragment>
    )
}

export default TeamDetails;