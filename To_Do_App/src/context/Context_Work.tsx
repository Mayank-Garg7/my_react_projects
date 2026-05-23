import { createContext, useEffect, useState, type ReactNode } from "react";
import Tasks from "../Data/Tasks.json";


export type Task = {
    id: number;
    text: string;
    status: "pending" | "completed";
};


type ContextType = {
    work: Task[];
    add_To_Work: (text: string) => void;
    delete_Work: (id: number) => void;
    update_Work: (id: number, text: string) => void;
    updateTaskStatus: (
        id: number,
        status: "pending" | "completed"
    ) => void;
};


const Context_Work = createContext<ContextType | null>(null);


type ChildrenProps = {
    children: ReactNode;
};


export const ContextProvider = ({ children, }: ChildrenProps) => {
    // initialize from localStorage OR json data
    const [work, setWork] = useState<Task[]>(() => {
        const data = localStorage.getItem("Work_to_do");
        return data
            ? (JSON.parse(data) as Task[])
            : (Tasks as Task[]);
    });


    // save to localStorage
    useEffect(() => {
        localStorage.setItem("Work_to_do", JSON.stringify(work));
    }, [work]);


    // add task
    const add_To_Work = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            status: "pending",
        };
        setWork((prev) => [newTask, ...prev]);
    };


    // Update task 
    const update_Work = (id: number, text: string) => {
        console.log(id,"object",text)
    }


    // delete task
    const delete_Work = (id: number) => {
        if(window.confirm("Are you sure to delete")){
            setWork((prev) => prev.filter((item) => item.id !== id))
        }
    }

    // update status
    const updateTaskStatus = (id: number, status: "pending" | "completed") => {
        setWork((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, status }
                    : task
            )
        );
    };


    return (
        <Context_Work.Provider
            value={{
                work,
                add_To_Work,
                update_Work,
                delete_Work,
                updateTaskStatus,
            }}
        >
            {children}
        </Context_Work.Provider>
    );
};

export default Context_Work;