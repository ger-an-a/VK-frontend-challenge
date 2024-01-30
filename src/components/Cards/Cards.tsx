import style from './Cards.module.css';

import { Card } from "./Card/Card"

import { ListItem } from '../../utils/types';

type Props = {
    list: ListItem[], //массив карточек
};

export const Cards = ({ list }: Props) => {

    return (
        <ul className={style.grid}>
            {
                list.map((item, index) => (
                    <li key={item.id + index}>
                        <Card id={item.id} url={item.url} />
                    </li>
                ))
            }
        </ul>
    )
}

