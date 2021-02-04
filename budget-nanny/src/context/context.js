import React, { useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {

  const [transactions, dispatchEvent] = useReducer(contextReducer);

  const deleteTransaction = (id) => {dispatchEvent({type: 'DELETE_TRANSACTION',payload: id})}
  const addTransaction = (transaction) => {dispatchEvent({type: 'ADD_TRANSACTION', payload: transaction})}

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
