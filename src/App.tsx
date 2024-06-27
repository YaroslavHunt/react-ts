import React, {FC} from 'react';
import './App.css';
import Character from "./components/Character";

const App: FC = ()  => {
  return(
      <>
          <Character
              name={'homer'}
              image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
          >Simpson</Character>
          <Character
              name={'marge'}
              image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
          >Simpson</Character>
          <Character
              name={'bart'}
              image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
          >Simpson</Character>
          <Character
              name={'lisa'}
              image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
          >Simpson</Character>
          <Character
              name={'maggie'}
              image={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
          >Simpson</Character>
      </>
  );
}

export default App;
