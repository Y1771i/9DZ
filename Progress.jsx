import React from "react";
import classNames from "classnames"; // Убедитесь, что библиотека classnames установлена

export const Progress = ({ steps, activeStep }) => {
    // Вынесем вычисления наверх
    const progressPercentage = Math.round((100 / steps) * (activeStep - 1));
    const progressUnits = Array.from({ length: steps }, (_, index) => ({
        isActive: index < activeStep,
        isCurrent: index === activeStep - 1,
    }));

    return (
        <div className="indicator">
            <div className="indicator__text">
                <span className="indicator__description">Прогресс прохождения:</span>
                <span className="indicator__value">{progressPercentage}%</span>
            </div>
            <div className="indicator__progressbar">
                {progressUnits.map((unit, index) => (
                    <div
                        key={index} //! Добавил ключ для элементов из map
                        className={classNames(
                            "indicator__unit",
                            { "_active": unit.isActive }, //! Актив шаги
                            { "_current": unit.isCurrent } //! Текущий шаг
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

