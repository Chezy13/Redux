import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./App.module.css";
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const App: FC = () => {

  const dispatch = useDispatch()
  const cash = useSelector((state: any) => state.cash.cash)
  const customers = useSelector((state: any) => state.customers.customers)
  
  const addCash = (cash: any) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash: any) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name: any) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer: any) => {
    dispatch(removeCustomerAction(customer.id))
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
          <button 
            onClick={ () => addCustomer(prompt()) }
          >
            ADD CUSTOMER
          </button>
        </div>
        <div>
          {!!customers ?
          <div>
            {customers.map((customer: any) =>
              <h2
                onClick={() => removeCustomer(customer)}
              >
                {customer.name}
              </h2>
                )}
          </div>
            :
          <div>
            Not Found!
          </div>  
        }
        </div>
      </div>
    </div>
  );
};

export default App;