import style from './Navbar.module.css';

import { NavbarLink } from '../NavbarLink/NavbarLink';

export const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <NavbarLink src="/cats" title="Все котики" />
            <NavbarLink src="/saved-cats" title="Любимые котики" />
        </nav>
    )
}