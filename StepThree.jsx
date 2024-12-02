/* eslint-disable linebreak-style */
import React from "react";
import { Button, Input } from "../components";

export const StepThree = () => {
    //! Массив данных для вариантов
    const variants = [
        { id: 1, src: "#", alt: "laugh", text: "Ваш ответ 1" },
        { id: 2, src: "#", alt: "hearts", text: "Ваш ответ 2" },
        { id: 3, src: "#", alt: "smirk", text: "Ваш ответ 3" },
        { id: 4, src: "#", alt: "fright", text: "Ваш ответ 4" },
    ];

    return (
        <div className="emoji-quiz">
            <div className="question">
                <h2>3. Занимательный вопрос</h2>
                <ul className="emoji-variants">
                    {variants.map(({ id, src, alt, text }) => (
                        <li key={id} className="variant-wrapper">
                            <Input InputType="radio" InputName="variant" InputID={`variant-${id}`} />
                            <label htmlFor={`variant-${id}`}>
                                <img src={src} alt={alt} />
                                <p>{text}</p>
                            </label>
                        </li>
                    ))}
                </ul>
                <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
            </div>
        </div>
    );
};
