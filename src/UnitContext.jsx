import React, { useContext, useState } from "react";

const UnitContext = React.createContext();
const UnitUpdateContext = React.createContext();

//Custom hook to prevent having to access "UnitContext" outside of this file
//useUnit will provide easy access to current value
export function useUnit() {
    return useContext(UnitContext);
}

//Custom hook like above, except this one will update the unit
export function useUnitUpdate() {
    return useContext(UnitUpdateContext);
}

    //Handles creating & updating the state, then pushing the values to the children
    export function UnitProvider ({ children }) {
         const [celsiusUnit, setCelsiusUnit] = useState(true);

         //A toggle function so celsius unit will toggle between true and false
         function toggleUnit(event) {
            event.preventDefault();
            setCelsiusUnit(prevCelsiusUnit => !prevCelsiusUnit);
        }

        return (
            <UnitContext.Provider value={celsiusUnit}>
                <UnitUpdateContext.Provider value={toggleUnit}>
                    {children} 
                </UnitUpdateContext.Provider>
            </UnitContext.Provider>
        )
    }