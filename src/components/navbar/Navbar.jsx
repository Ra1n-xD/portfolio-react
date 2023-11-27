import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

function Navbar() {
    const activeLink = 'nav-list__link nav-list__link--active';
    const defaultLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        Червоненко Эдуард
                    </NavLink>

                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : defaultLink)}>
                                Главная
                            </NavLink>
                        </li>
                        {/* <li className="nav-list__item">
                            <NavLink to="/tricks" className={({ isActive }) => (isActive ? activeLink : defaultLink)}>
                                Фишки CSS
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/task" className={({ isActive }) => (isActive ? activeLink : defaultLink)}>
                                Задачка JS
                            </NavLink>
                        </li> */}
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : defaultLink)}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;