import { NavLink } from 'react-router-dom';
import style from './NavbarLink.module.css';

type Props = {
    src: string, //адрес ссылки
    title: string //текст ссылки
}

export const NavbarLink = ({ src, title }: Props) => {
    return (
        <NavLink to={src}
            className={({ isActive }) =>
                [
                    style.navbarLink,
                    isActive ? style.navbarLink_active : '',
                ].join(' ')
            }
        >
            {title}
        </NavLink>
    )
}