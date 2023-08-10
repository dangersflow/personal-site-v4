function AppContextReducer(state: any, action: { type: any; payload: any }) {
  switch (action.type) {
    case "SET_CURRENT_PAGE_INDEX":
      console.log("current page: " + action.payload.currentPageIndex);
      return {
        ...state,
        currentPageIndex: action.payload.currentPageIndex,
      };
    default:
      return state;
  }
}

export default AppContextReducer;
