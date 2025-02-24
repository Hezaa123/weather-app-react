import React, { useContext, useState } from "react";

const UnitContext = React.createContext<boolean>(true);
const UnitUpdateContext = React.createContext<(event: React.MouseEvent<HTMLAnchorElement>) => void>(() => {});

export const useUnit = () => {
    return useContext(UnitContext);
};

export const useUnitUpdate = () => {
    return useContext(UnitUpdateContext);
};

interface UnitProviderProps {
    children: React.ReactNode;
}

export const UnitProvider: React.FC<UnitProviderProps> = ({ children }) => {
    const [celsiusUnit, setCelsiusUnit] = useState(true);

    const toggleUnit = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setCelsiusUnit(prevCelsiusUnit => !prevCelsiusUnit);
    };

    return (
        <UnitContext.Provider value={celsiusUnit}>
            <UnitUpdateContext.Provider value={toggleUnit}>
                {children}
            </UnitUpdateContext.Provider>
        </UnitContext.Provider>
    );
};