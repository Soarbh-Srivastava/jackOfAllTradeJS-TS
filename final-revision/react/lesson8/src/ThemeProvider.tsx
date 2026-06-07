import { useState } from "react";
import { ThemeContext } from "./contextApi";

interface ThemeProviderProps{
  children: React.ReactNode;
}

export function ThemeProvider({children}:ThemeProviderProps){
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme=()=>{
        setTheme((prev)=>(prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}