import style from './Header.module.css';

import { Navbar } from './Navbar/Navbar';

export const Header = () => {
    return (
        <div className={style.header}>
            <Navbar />
        </div>
    )
}

