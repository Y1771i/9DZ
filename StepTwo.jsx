/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import React from "react";
import { Button, Input } from "../components";

export const StepTwo = () => {
    //! Массив данных для вариантов
    const variants = [
        { id: 1, label: "Ваш ответ" },
        { id: 2, label: "Ваш ответ" },
        { id: 3, label: "Ваш ответ" },
        { id: 4, label: "Ваш ответ" },
    ];

    return (
        <div className="variants-quiz">
            <div className="question">
                <h2>1. Занимательный вопрос</h2>
                <ul className="variants">
                    {variants.map(({ id, label }) => (
                        <li key={id} className="variant-wrapper">
                            <Input
                                InputType="radio"
                                InputName={`variant-${id}`}
                                InputID={`variant-${id}`}
                            />
                            <label htmlFor={`variant-${id}`}>{label}</label>
                        </li>
                    ))}
                </ul>
                <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
            </div>
        </div>
    );
};
