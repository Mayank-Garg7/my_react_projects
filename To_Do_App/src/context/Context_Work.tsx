import { createContext, type ReactNode } from 'react';


type ContextType = {
  add_To_Work: (work: string) => void;
};
const Context_Work = createContext<ContextType | null>(null);


type ChildrenProps = {
    children: ReactNode
}


export const ContextProvider = ({ children }: ChildrenProps) => {
    const add_To_Work = (work : string) => {
        console.log(work)
    }


    return (
        <Context_Work.Provider value={{
            add_To_Work,

        }}>
            {children}
        </Context_Work.Provider>
    )
}

export default Context_Work
