import {useState} from "react";

export const useToggle = (initValue:boolean) => {
    const [toggle, setToggle] = useState<boolean>(initValue)
    const handleToggle = () => setToggle(prevState => !prevState);
    return [toggle, handleToggle];
}
