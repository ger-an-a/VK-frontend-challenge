import { useContext, useEffect, useState } from 'react';
import style from './Card.module.css';

import { ListItem } from '../../../utils/types';
import { SavedCatsContext } from '../../../contexts/SavedCatsContext';

type Props = {
    id: string, //id картинки
    url: string, //адрес картинки
}

export const Card = ({ id, url }: Props) => {

    const context = useContext(SavedCatsContext);

    const [btnActive, setBtnActive] = useState(false);

    useEffect(() => {
        setBtnActive(checkLike());
    }, [])


    function handleLike() {
        setBtnActive(!btnActive);
        context?.handleLike({ id, url });
    }

    function checkLike(): boolean {
        if (context?.savedList.find((item: ListItem) => item.id === id)) {
            return true
        } else return false
    }


    return (
        <div className={style.container}>
            <img className={style.image} src={url} alt="котик" />
            <button onClick={handleLike} className={`${style.likeBtn} ${btnActive ? style.likeBtn_active : ''}`} />
        </div>
    )
}