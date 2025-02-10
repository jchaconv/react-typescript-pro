import { createContext } from "react";
import { ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;