import React, {FC, useEffect, useState} from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import IUser from "./models/IUser";

const App: FC = ()  => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [userID, setUserID] = useState<number>(0);
    const clickHandler = (id:number) => {
        setUserID(id);
    }

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);


  return(
      <>
          {
              users.map(({id, name, email, password}, index) => <UserComponent
                  key={index}
                  id={id}
                  name={name}
                  email={email}
                  password={password}
                  clickHandler={clickHandler}
                  />
              )
          }
          <h2>{userID}</h2>
      </>
  );
}

export default App;
