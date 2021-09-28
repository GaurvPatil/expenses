
import { ADD_EXPENSE, DELETE_EXPENSE } from "../actiontype/expenses";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};

