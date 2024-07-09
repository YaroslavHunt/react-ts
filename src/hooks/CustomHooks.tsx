import {useEffect, useState} from "react";

const useFetch = <T, >(endpoint:string, init:T) => {
    const [data, setData] = useState(init);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + endpoint)
            .then(res => res.json())
            .then(data=>setData(data))
    },[]);

    return data;
}

export {useFetch}