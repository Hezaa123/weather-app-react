import React, { useContext, useState } from "react";

const UnitContext = React.createContext();
const UnitUpdateContext = React.createContext();

export function useUnit() {
    return useContext(UnitContext);
}

export function useUnitUpdate() {
    return useContext(UnitUpdateContext);
}

    export function UnitProvider ({ children }) {
         const [celsiusUnit, setCelsiusUnit] = useState(true);
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