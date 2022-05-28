import React, { useState, useCallback, useEffect } from 'react';

import TeamsList from './TeamsList';

const  Teams = () => {
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTeamsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/');

            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            setTeams(data);

        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchTeamsHandler();
    }, [fetchTeamsHandler]);

    return (
        <React.Fragment>
            <h1>Teams</h1>
            <h2>List of all teams available</h2>

            {!isLoading && <TeamsList teams={ teams }></TeamsList>}
			{isLoading && <p>Loading...</p>}
			{!isLoading && error && <p>{ error }</p>}
        </React.Fragment>
    )
}

export default Teams;