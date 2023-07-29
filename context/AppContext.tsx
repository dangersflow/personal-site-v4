import { createContext, type Dispatch } from "react";

const AppContext = createContext({
  state: {},
  dispatch: (() => undefined) as Dispatch<any>,
});

export default AppContext;
