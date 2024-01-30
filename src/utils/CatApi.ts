import { APIBaseUrl, APIChunkLimit, APIKey, APIStartPage } from "./constants";

type ConstructorParams = {
    baseUrl: string,
    headers: { 'Content-Type': string, 'x-api-key': string };
}

class CatApi {

    private _baseUrl: string;
    private _headers: { 'Content-Type': string, 'x-api-key': string };

    constructor({ baseUrl, headers }: ConstructorParams) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    private _checkResponse(res: Response) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getImgs(limit = APIChunkLimit, page = APIStartPage) {
        return fetch(`${this._baseUrl}/search?limit=${limit}&page=${page}`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }
}

export const catApi = new CatApi({
    baseUrl: APIBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': APIKey
    },
})
