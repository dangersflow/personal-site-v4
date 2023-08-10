import { createContext, type Dispatch } from "react";

const AppContext = createContext({
  state: {
    currentPageIndex: 0,
    currentPage: 1,
  },
  dispatch: (() => undefined) as Dispatch<any>,
});

export default AppContext;
