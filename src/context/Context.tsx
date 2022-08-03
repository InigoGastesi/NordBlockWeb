import { createContext } from "react";
import { IScreen } from "../interface/jsondata";

const Context = createContext<undefined | IScreen[]>(undefined);

export default Context