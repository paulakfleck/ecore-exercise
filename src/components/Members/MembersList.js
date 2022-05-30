import React from 'react';

const MembersList = (props) => {
    console.log( props.members);

    // Since the images were not loading from cnd.fakercloud, I removed the "alt" text so the page is more visible, but I prefer to add "alt" to images.
    const listItems = props.members.map((member) =>
        <li key={member.id}>
            <figure>
                <img src={member.avatarUrl} />
                <figcaption>
                    {member.firstName} {member.lastName}
                </figcaption>
            </figure>

            <h4 className="location">Based in: <span>{member.location}</span></h4>
        </li>
    );

    if (listItems.length === 0) {
		return (<li>No members found.</li>);

	} else {
		return (
			<ul className='list-of-cards'>{listItems}</ul>
		)
	}
}

export default MembersList;