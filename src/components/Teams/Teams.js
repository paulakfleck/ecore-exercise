import React, { useState, useEffect } from 'react';

import TeamsList from './TeamsList';
import Search from './../Search';

import useFetch from './../../hooks/useFetch';

const Teams = () => {
    const url = 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com';
    const [teams, setTeams] = useState([]);

    const defineTeams = teams => {
        setTeams(teams);
    }

    const { isLoading, error, fetchData: fetchTeams } = useFetch(`${url}/teams`, defineTeams);

   useEffect(() => {
    fetchTeams();
   }, []);

    return (
        <React.Fragment>
            <h1 className="yellow">Teams</h1>

            <Search />

            {!isLoading && <TeamsList teams={ teams }></TeamsList>}
			{isLoading && <p className="loading">Loading...</p>}
			{!isLoading && error && <p>{ error }</p>}
        </React.Fragment>
    )
}

export default Teams;