import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import ThiccerLogo from '../public/js/logo'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <ThiccerLogo className ={navStyles.logo}/>
                </li>
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