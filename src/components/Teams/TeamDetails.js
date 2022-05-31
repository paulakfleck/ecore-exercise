import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './../../hooks/useFetch'

import MembersList from '../Members/MembersList';
import Search from './../Search';

const TeamDetails = () => {
    const url = 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com';
    const teamId = useParams().team;
    const [team, setTeam] = useState({});
    const [searchInput, setSearchInput] = useState('');

    const getFilter = (searchValue) => {
        setSearchInput(searchValue);
    }

    const defineTeam = fetchedTeam => {
        const tempTeam = {
            name: fetchedTeam.name,
            membersList: getMemberIds(fetchedTeam)
        }

        setTeam(tempTeam);
    }

    const { isLoading, error, fetchData: fetchTeam } = useFetch(`${url}/teams/${teamId}`, defineTeam);

    useEffect(() => {
        fetchTeam();
    }, []);

    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         fetchTeam();
    //     }, 300);

    //     return () => clearTimeout(delayDebounceFn)
    // }, [searchInput]);


    // I tried fetching multiple users in a single request, but I was not successful, so I had to make one call for each member.
    // Patterns I tried: "url/users/<id>,<id>" and "url/users/<id>/<id>"
    const getMemberIds = (fetchedTeam) => {
        const memberIds = [fetchedTeam.teamLeadId, ...fetchedTeam.teamMemberIds];

        return memberIds.length > 0 ? memberIds : [];
    };

    return (
        <React.Fragment>
            <div>
                <h1>Team:
                    {isLoading && <span className="loading"> Loading...</span>}
                    {!isLoading && error && <p>{error}</p>}
                    {!isLoading && !error && <span> {team.name}</span>}
                </h1>

                <Search sendFilter={getFilter} placeholder="Filter by member name" />

                <MembersList members={team.membersList} filterMembers={searchInput} />

            </div>

            {isLoading && <p className="loading">Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
        </React.Fragment>
    )
}

export default TeamDetails;