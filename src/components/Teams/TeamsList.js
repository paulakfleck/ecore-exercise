import React from 'react';

import { Link } from 'react-router-dom';

const  TeamsList = (props) => {
    const listItems = props.teams.map((team) =>
        <li key={team.id}>
            {team.name}

            <Link to='/teams/{team.id}'>Home</Link>
        </li>
    );

    if (listItems.length === 0) {
		return (<li>No expenses found.</li>);

	} else {
		return (
			<ul>{listItems}</ul>
		)
	}
}

export default TeamsList;