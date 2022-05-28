import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './../../hooks/useFetch';

const  TeamDetails = () => {
    const teamId = useParams().team;
    const {  data, error, isLoading } = useFetch(`https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${teamId}`);
    
    console.log(data, error, isLoading);

    return (
        <React.Fragment>
            <h1>Teams details:</h1>

            {!isLoading && data.id}
			{isLoading && <p>Loading...</p>}
			{!isLoading && error && <p>{ error }</p>}
        </React.Fragment>
    )
}

export default TeamDetails;