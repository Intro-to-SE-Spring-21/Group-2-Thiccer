import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/post'>Post</Link>
                </li>
                <li>
                    <Link href='/profile'>Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav