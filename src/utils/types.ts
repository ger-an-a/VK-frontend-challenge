
import { Dispatch, SetStateAction } from 'react';

export type ListItem = {
    id: string;
    url: string;
};

export type setListItem = Dispatch<SetStateAction<ListItem[]>>;

export type SavedCatsContextType = {
    savedList: ListItem[],
    handleLike: ({ id, url }: ListItem) => void
};