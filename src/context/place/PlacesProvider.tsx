
export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
}

// este es el inicial state para toda nuesta app
const INITIAL_STATES: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

export const PlacesProvider = () => {
    return(
        <>
            <h1> Hello! </h1>
        </>
    )
}