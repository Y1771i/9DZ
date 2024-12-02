import { Button, Input } from "../components";

export const StepOne = () => {
  return (
    <div className="single-input-quiz">
      <div className="question">
        <h2>1. Занимательный вопрос</h2>
        <Input
          InputType="text"
          InputName="answer"
          InputPlaceholder="Ваш ответ"
          SpanErrorMessage="Введите номер в правильном формате"
        />
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
