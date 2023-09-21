import { useState } from "react";

const messages = [
    "Learn React ☀",
    "Apply for Jobs 💼",
    "Invest your income 🤑",
];

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrev() {
        setStep((s) => s - 1);
    }

    function handleNext() {
        setStep((s) => s + 1);
    }
    return (
        <>
            <button className="close" onClick={() => setIsOpen((io) => !io)}>
                &times;
            </button>{" "}
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 && "active"}>1</div>
                        <div className={step >= 2 && "active"}>2</div>
                        <div className={step >= 3 && "active"}>3</div>
                    </div>

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            className={step > 1 && "enabled"}
                            onClick={handlePrev}
                            disabled={step === 1}
                        >
                            Previous
                        </button>
                        <button
                            className={step < 3 && "enabled"}
                            onClick={handleNext}
                            disabled={step === 3}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
