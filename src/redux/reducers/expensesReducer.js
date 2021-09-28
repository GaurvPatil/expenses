import { ADD_EXPENSE, DELETE_EXPENSE } from "../actiontype/expenses";

// for local storage


const defaultState = {
  expenseList:[],
};

export const expenseReducer = (state = defaultState, action) => {
  const newArr = [...state.expenseList, action.data];
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseList: newArr,
      };
    }
    case DELETE_EXPENSE: {
      const { data } = action;
      const upDatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      return {
        ...state,
        expenseList: upDatedList,
      };
    }

    default:
      return state;
  }
};
