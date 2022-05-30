import React from 'react';

import { Link } from 'react-router-dom';

const TeamsList = (props) => {
    if (typeof props.teams !== 'boolean') {
        const listItems = props.teams.map((team) =>
            <li key={team.id}>
                <Link 
                    to={`/teams/${team.id}`}>
                        {team.name}
                    </Link>
            </li>
        );
    
        if (listItems.length === 0) {
            return (
                <ul className="empty-results">
                    <li>No teams found.</li>
                </ul>
            );
    
        } else {
            return (
                <ul className="list-of-items">{listItems}</ul>
            )
        }
    }
}

export default TeamsList;