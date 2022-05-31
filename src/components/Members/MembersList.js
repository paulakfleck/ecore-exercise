import React from 'react';

import MemberDetails from './MemberDetails';

const MembersList = (props) => {
    if (props.members) {
        const listItems = props.members.map((member) =>
            <MemberDetails key={member} member={member} filter={props.filterMembers} />
        );

        return (
            <ul className="list-of-cards">{listItems}</ul>
        )
    } else {
        return (
            <ul className="empty-results">
                <li key="0">No members found.</li>
            </ul>
        );
    }
}

export default MembersList;