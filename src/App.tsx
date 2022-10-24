import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./App.module.css";

const App: FC = () => {

  const dispatch = useDispatch()
  const cash = useSelector((state: any) => state.cash)
  
  const addCash = (cash: any) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash: any) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{cash}$</h1>
        <div className={styles.contentBtns}>
          <button 
            onClick={ () => addCash(Number(prompt())) }
          >
            ADD CASH
          </button>
          <button 
            onClick={ () => getCash(Number(prompt())) }
          >
            GET CASH
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;