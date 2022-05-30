import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './../../hooks/useFetch'

import MembersList from '../Members/MembersList';

const TeamDetails = () => {
    const url = 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com';
    const teamId = useParams().team;
    const [teamTitle, setTeamTitle] = useState('');
    const [membersList, setMembersList] = useState([]);
    const [isLoadingMembers, setIsLoadingMembers] = useState(false);
    const [errorMembers, setErrorMembers] = useState(null);
    
    const transformMembers = team => {
        console.log('team! ', team);
        setTeamTitle(team.name);
        fetchMembersHandler(team);
    }

   const { isLoading, error, fetchData: fetchTeam } = useFetch(`${url}/teams/${teamId}`, transformMembers);

   useEffect(() => {
    fetchTeam();
   }, []);

    
    // I tried fetching multiple users in a single request, but I was not successful, so I had to make one call for each member.
    // Patterns I tried: "url/users/<id>,<id>" and "url/users/<id>/<id>"
    const fetchMembersHandler = async (team) => {
        console.log('fetchMembersHandler');
        let tempMembersList = [];
        const memberIds = [team.teamLeadId, ...team.teamMemberIds];

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
            
            setMembersList(tempMembersList);
            setIsLoadingMembers(false);
        }
    };

    return (
        <React.Fragment>
            {!isLoading &&
                <div>
                    <h1>Team: <span>{teamTitle}</span></h1>
                    {isLoadingMembers && <p className="loading">Loading...</p>}
                    {!isLoadingMembers && errorMembers && <p>{errorMembers}</p>}
                    {!isLoadingMembers && !errorMembers && <MembersList members={membersList} />}
                    
                </div>
            }

            {isLoading && <p className="loading">Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
        </React.Fragment>
    )
}

export default TeamDetails;