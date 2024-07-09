import React, {FC} from 'react';
import './App.css';
import {useFetch} from "./hooks/CustomHooks";

const App: FC = ()  => {

    type IUser = {
        id:number
        name: string,
        email: string,
        password: string,
    }

    const users = useFetch<IUser[]>('/users', [])

  return(
      <>
          {
            users.map((user: IUser) => <div>{user.name}</div>)
          }
      </>
  );
}

export default App;
