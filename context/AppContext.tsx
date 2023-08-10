import { createContext, type Dispatch } from "react";

const AppContext = createContext({
  state: {
    currentPageIndex: 0,
  },
  dispatch: (() => undefined) as Dispatch<any>,
  currentPage: 1,
});

export default AppContext;
