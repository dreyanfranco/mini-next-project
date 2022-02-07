import Link from 'next/Link'
import NavStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav
