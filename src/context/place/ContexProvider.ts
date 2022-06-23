// este es el conteto que se ejecura segun lo que este ocurriendo
import { createContext } from "react";

export interface PlacesContexProps {
    isLoading: boolean;
    userLocation?: [number, number]
}

export const PlecesContext = createContext<PlacesContexProps>({} as PlacesContexProps);
