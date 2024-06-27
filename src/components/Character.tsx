import React, {FC} from 'react';

interface iProps {
    name: string;
    image: string;
}

const Character:FC<iProps> = (props) => {
    let {name, image} = props;

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;