const retriveLocalStorageData = <T,> (key:string) => {
    let pairJSON = localStorage.getItem(key) || '';
    if (!pairJSON) {
        return {} as T;
    }
    let tokenRefreshPair = JSON.parse(pairJSON);
    return tokenRefreshPair as T;
}

export {
    retriveLocalStorageData
}