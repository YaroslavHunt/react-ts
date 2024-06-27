import React, {FC, ReactNode} from 'react';

interface iProps {
    name: string;
    image: string;
    // children?: React.ReactNode;
}

type PropsWithChildren<T> = T & {children?: ReactNode};

const Character:FC<PropsWithChildren<iProps>> = ({name, image, children}) => {


    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;