import { Button, Input } from "../components";
import React from "react";


export const StepFour = () => {
    //! Массив данных:
    const variants = [1, 2, 3, 4, 5];

    return (
        <div className="emoji-quiz">
            <div className="question">
                <h2>4. Занимательный вопрос</h2>
                <ul className="level-variants">
                    {variants.map((variant) => (
                        <li key={variant} className="variant-wrapper">
                            <Input
                                InputType="radio"
                                InputName="variant"
                                InputID={`variant-${variant}`}
                            />
                            <label htmlFor={`variant-${variant}`}>{variant}</label>
                        </li>
                    ))}
                </ul>
                <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
            </div>
        </div>
    );
};
