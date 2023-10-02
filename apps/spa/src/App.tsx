import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ButtonLabel } from "@radix-spectrum/components";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex">
            <Button size="sm">
                Text
                <ButtonLabel>Thing</ButtonLabel>
            </Button>
            <Button>
                <ButtonLabel>Thing</ButtonLabel>
            </Button>
            <Button size="lg">
                <ButtonLabel>Thing</ButtonLabel>
            </Button>
            <Button size="xl">
                <ButtonLabel>Thing</ButtonLabel>
            </Button>
        </div>
    );
}

export default App;
