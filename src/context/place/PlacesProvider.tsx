import { PlacesContext } from "./ContexProvider";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

// este es el inicial state para toda nuesta app
const INITIAL_STATES: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

export const PlacesProvider = ({ children} : Props ) => {
    return(
        <PlacesContext.Provider value={{
            isLoading:true,
            userLocation: undefined,
        }}>
            { children}
        </PlacesContext.Provider>
    )
}