import React, { useReducer, createContext} from 'react'

import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {

  useReducer(contextReducer);

  const deleteTransaction = (id) => {dispatchEvent({type: 'Delete_Transaction',payload: id})}
  const addTransaction = (transaction) => {dispatchEvent({type: 'Add_Transaction', payload: transaction})}

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
