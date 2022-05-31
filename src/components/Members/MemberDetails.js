import React, { useState, useEffect } from 'react';

import useFetch from './../../hooks/useFetch';

const MemberDetails = (props) => {
    const url = 'https://cgjresszgg.execute-api.eu-west-1.amazonaws.com';
    const [member, setMember] = useState('');

    const defineMember = (fetchedMember) => {
        if ((fetchedMember.firstName.toLowerCase().includes(props.filter.toLowerCase())) || (fetchedMember.lastName.toLowerCase().includes(props.filter.toLowerCase()))) {
            setMember(fetchedMember);
        } else {
            setMember(false);
        }
    }

    const { isLoading, error, fetchData: fetchMember } = useFetch(`${url}/users/${props.member}`, defineMember);

    useEffect(() => {
        fetchMember();
    }, [props.filter]);

    // Since the images were not loading from cnd.fakercloud, I removed the "alt" text so the page is more friendly, but I prefer to add "alt" to images.
    return (
        <React.Fragment>
            {!!member &&
                <li key={member.id}>
                    {isLoading && !error && <p className="loading"> Loading...</p>}
                    {!isLoading && error && <p>{error}</p>}


                    {!isLoading && !error &&
                        <React.Fragment>
                            <figure>
                                <img src={member.avatarUrl} />
                                <figcaption>
                                    {member.firstName} {member.lastName}
                                </figcaption>
                            </figure>

                            <h4 className="location">Based in: <span>{member.location}</span></h4>
                        </React.Fragment>
                    }
                </li>
            }
        </React.Fragment>
    );
}

export default MemberDetails;

