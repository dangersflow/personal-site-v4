function AppContextReducer(state: any, action: { type: any; payload: any }) {
  switch (action.type) {
    case "SET_CURRENT_PAGE_INDEX":
      return {
        ...state,
        currentPageIndex: action.payload,
      };
  }
}

export default AppContextReducer;
