import { createContext, useEffect, useState, type ReactNode } from 'react';
import Tasks from '../Data/Tasks.json'


type ContextType = {
  work: Task[];
  add_To_Work: (text: string) => void;
};
const Context_Work = createContext<ContextType | null>(null);


type ChildrenProps = {
    children: ReactNode
}
type Task = {
    id: number;
    text: string;
};


export const ContextProvider = ({ children }: ChildrenProps) => {

    const [work, setWork] = useState<Task[]>(() => {
        const data = localStorage.getItem("Work_to_do");
        return data ? (JSON.parse(data) as Task[]) : Tasks;
    });
    useEffect(() => {
        localStorage.setItem("Work_to_do", JSON.stringify(work));
    }, [work]);


    const add_To_Work = (text: string) => {
        console.log(text)
    }


    return (
        <Context_Work.Provider value={{
            work,
            add_To_Work,

        }}>
            {children}
        </Context_Work.Provider>
    )   
}

export default Context_Work
