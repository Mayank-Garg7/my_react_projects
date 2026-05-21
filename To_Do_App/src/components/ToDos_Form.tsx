import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import { useWorkContext } from "../hooks/useWorkContext";

function ToDos_Form() {
    const [text, setText] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const {add_To_Work} = useWorkContext();


    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setShowMessage(value.trim().length > 0 && value.trim().length < 10);
        setText(value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        add_To_Work(text)
    };


    return (
        <Card>
            <div className="flex gap-3 flex-col">
                <h1 className="m-auto">
                    What are you thinking to complete next.
                </h1>

                <form onSubmit={handleSubmit} className="flex gap-4 flex-col" >
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        className="bg-gray-100 w-3/4 m-auto px-3 py-2 rounded-lg text-black font-bold"
                        placeholder="what are you thinking to do next"
                    />

                    {showMessage && (<p className="text-xl m-auto my-1">😉 Think more dude!</p>)}

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Card>
    );
}

export default ToDos_Form;