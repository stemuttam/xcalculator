import React, { useState } from "react";
import "./Calculator.css"; // Add CSS for styling

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                if (input === "") {
                    setResult("Error");
                } else {
                    // Evaluate the expression following BODMAS
                    let res = eval(input);
                    setResult(res === Infinity ? "Infinity" : res);
                }
            } catch (error) {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="result">{result}</div>
            <div className="buttons">
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
