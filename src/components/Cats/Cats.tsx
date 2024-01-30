import style from './Cats.module.css';

import { useEffect, useRef, useState } from 'react';

import { Cards } from '../Cards/Cards';

import { catApi } from '../../utils/CatApi';

import { ListItem, setListItem } from '../../utils/types';

type Props = {
    list: ListItem[], //массив загруженных картинок
    setList: setListItem //задать массив загруженных картинок
}

export const Cats = ({ list, setList }: Props) => {

    const loadFlagRef = useRef<HTMLDivElement>(null);

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [loadTitle, setLoadTitle] = useState('...Сейчас здесь появятся котики...');

    const observer = new IntersectionObserver(function (entries) {
        setIsIntersecting(entries[0].isIntersecting);
    });

    function loadImages() {
        //Загружает картинки, если загрузка уже не идет
        //при успешной загрузке обновляет список и увеличивает номер страницы
        if (!isLoading) {
            setIsLoading(true);
            catApi.getImgs(undefined, page)
                .then((res) => {
                    setList([...list, ...res]);
                    setPage(page + 1);
                    if (!page)
                        setLoadTitle('... загружаем еще котиков ...');
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }

    //При изменении видимости флага загрузки на истину грузим картинки.
    //Если после загрузки все еще будет виден флаг, загрузка не продолжится.
    useEffect(() => {
        if (isIntersecting) {
            loadImages();
        }
    }, [isIntersecting])

    //при монтировании/размонтировании добавляем/удаляем отслеживание появления флага загрузки на экране
    useEffect(() => {
        if (list.length)
            setLoadTitle('... загружаем еще котиков ...');
        const element = loadFlagRef.current;
        if (element) {
            observer.observe(element);
        }

        return (() => {
            if (element) {
                observer.unobserve(element);
            }
        })
    }, [])

    return (
        <main >
            <Cards list={list} />
            <div className={style.loadFlag} ref={loadFlagRef}>{loadTitle}</div>
        </main>
    )
}

