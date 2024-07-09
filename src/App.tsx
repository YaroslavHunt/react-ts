import React, {FC, useReducer} from 'react';
import './App.css';


const App: FC = ()  => {

    const reducerActions = (state:number, action:{type:string, payload:number}) => {

        switch (action.type) {
            case 'add':
                return state + action.payload;
            case 'getBack':
                return state - action.payload;
            case 'reset':
                return action.payload;
        }
        return state;
    }

    const add = () => {
        dispatch({type:'add', payload:10})
    }
    const getBack = () => {
        dispatch({type:'getBack', payload:10})
    }
    const reset = () => {
        dispatch({type:'reset', payload:0})
    }

    const [number, dispatch ] = useReducer(reducerActions, 0)

  return(
      <>
          <h2>Reducer demo.current value: {number}</h2>
          <button onClick={add}>add</button>
          <button onClick={getBack}>getBack</button>
          <button onClick={reset}>reset</button>
          <hr/>
      </>
  );
}

export default App;
