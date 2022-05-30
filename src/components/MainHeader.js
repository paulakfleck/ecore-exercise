import { NavLink } from 'react-router-dom';

const MainHeader = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/welcome">Welcome!</NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/teams">Teams</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainHeader;