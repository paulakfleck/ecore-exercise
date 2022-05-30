import React from 'react';

import TeamsList from './TeamsList';

import useFetch from './../../hooks/useFetch';

const  Teams = () => {
    const { data, error, isLoading } = useFetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/');

    return (
        <React.Fragment>
            <h1>Teams</h1>
            <h2>List of all teams available</h2>

            {!isLoading && <TeamsList teams={ data }></TeamsList>}
			{isLoading && <p>Loading...</p>}
			{!isLoading && error && <p>{ error }</p>}
        </React.Fragment>
    )
}

export default Teams;