import { Cards } from "../Cards/Cards"

type ListItem = {
    id: string;
    url: string;
};

type Props = {
    list: ListItem[], //список сохраненных карточек
}

export const SavedCats = ({ list }: Props) => {

    return (
        <main>
            {
                list.length ? <Cards list={list} /> : <p>Тут пусто</p>
            }
        </main>

    )
}