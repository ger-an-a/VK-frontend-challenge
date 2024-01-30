import style from './App.module.css';

import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Header } from '../Header/Header';
import { Cats } from '../Cats/Cats';
import { SavedCats } from '../SavedCats/SavedCats';

import { SavedCatsContext } from '../../contexts/SavedCatsContext';

import { ListItem } from '../../utils/types';
import { localStorageKey } from '../../utils/constants';


export const App = () => {

  const [catsList, setCatsList] = useState<ListItem[]>([]); //массив загруженных карточек
  const [savedCatsList, setSavedCatsList] = useState<ListItem[]>([]); //массив сохраненных карточек

  useEffect(() => {
    //подгружаем из хранилища список в стейт при монтировании
    const listJSON = localStorage.getItem(localStorageKey);
    let saveList = [];
    if (listJSON) {
      saveList = JSON.parse(listJSON);
    }
    setSavedCatsList(saveList);
  }, [])

  function handleLike({ id, url }: ListItem) {
    //обработчик лайка 
    //проверяем карточку в списке сохраненных карточек. Если карточка уже есть, то удаляем, иначе добавляем в список
    //обновляем стейт и список в хранилище
    const newList = [...savedCatsList];
    const index = newList.findIndex((item: ListItem) => item.id === id);
    if (index > -1) {
      newList.splice(index, 1);
    } else newList.push({ id: id, url: url });
    setSavedCatsList(newList);
    localStorage.setItem(localStorageKey, JSON.stringify(newList));
  }

  return (
    <SavedCatsContext.Provider
      value={{
        savedList: savedCatsList,
        handleLike: handleLike
      }}>
      <div className={style.background}>
        <div className={style.page}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/cats" element={<Cats list={catsList} setList={setCatsList} />} />
              <Route path="/saved-cats" element={<SavedCats list={savedCatsList} />} />
              <Route path="*" element={<Navigate to="/cats" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </SavedCatsContext.Provider >
  )
}
