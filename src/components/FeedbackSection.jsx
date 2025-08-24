import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setShow(true);
      // input.current = e.target.value;
      // e.target.value = "";
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  return (
    <section>
      <h3 className="centered">Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              name: e.target.value,
              hasError: e.target.value.trim().length === 0,
            }));
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          <option value="help">Вопрос по курсу</option>
          <option value="error">Проблема с оплатой</option>
          <option value="suggest">Другое</option>
        </select>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>

        <hr />
        <StateVsRef />
      </form>
    </section>
  );
}
