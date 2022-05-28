import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <ul>
            <li>
                <Link to="/welcome">Home</Link>
            </li>
            <li>
                <Link to="/teams">Teams</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    )
}

export default MainHeader;