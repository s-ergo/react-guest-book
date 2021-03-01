import { memo, useRef } from "react";

function Form({ funct, data }) {
  const imageLoader = useRef(null);

  return (
    <form onSubmit={(e) => funct.handleFeedbackSend(e, data)}>
      <h2>Мой комментарий:</h2>

      <i
        className="material-icons closeForm"
        onClick={() => funct.handleSetter("nowDisplay", "startButton")}
      >
        clear
      </i>

      <div className="error">{data.errors}</div>

      <span className="formContainer">
        <label>
          Имя (на английском):
          <input
            name="name"
            type="text"
            maxLength="40"
            required
            placeholder="e.g. Piter"
            defaultValue={data.name}
            onInput={(e) => {
              funct.handleNameValidation(e);
              funct.handleChange(e);
            }}
          />
        </label>

        <label>
          E-mail:
          <input
            name="mail"
            type="text"
            required
            maxLength="40"
            placeholder="mail@example.com"
            defaultValue={data.mail}
            onInput={(e) => {
              funct.handleEmailOnInput(e);
              funct.handleSetter("errors", "");
            }}
            onBlur={(e) => {
              funct.handleChange(e);
              funct.handleEmailOnBlurValidation(e, funct);
            }}
          />
        </label>

        <label>
          Моя домашняя страница:
          <input
            name="homePage"
            type="text"
            maxLength="100"
            placeholder="example.com"
            defaultValue={data.homePage}
            onInput={(e) => funct.handleHomePageValidation(e)}
            onBlur={(e) => funct.handleChange(e)}
          />
        </label>
      </span>

      <label>
        Текст комментария:
        <textarea
          name="text"
          className="textareaForm"
          maxLength="800"
          required
          defaultValue={data.text}
          onBlur={(e) => funct.handleChange(e)}
        ></textarea>
      </label>

      <span className="formContainer">
        <input
          hidden
          type="file"
          ref={imageLoader}
          onChange={(e) => funct.handleImage(e, funct)}
        />

        <input
          type="button"
          className="buttonSubmit"
          defaultValue={data.buttonValue}
          onClick={(e) => imageLoader.current.click()}
        />

        <input
          type="button"
          className="buttonSubmit"
          defaultValue="Предварительный просмотр"
          onClick={() => funct.handleSetter("nowDisplay", "preview")}
        />

        <input
          type="submit"
          className="buttonSubmit"
          defaultValue="Опубликовать"
        />
      </span>
    </form>
  );
}

export default memo(Form);
