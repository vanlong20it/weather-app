import React from "react";

const Form = (props) => {
    const handleClearInput = () => {
        props.setInput("");
    };

    return (
        <form className="form-control" onSubmit={props.handleSubmit}>
            <input
                spellCheck="false"
                autoComplete="off"
                name="city"
                id="city"
                placeholder="City name"
                className="input-field"
                type="text"
                value={props.input}
                onClick={handleClearInput}
                onChange={(e) => props.setInput(e.target.value)}
            />
        </form>
    );
};

export default React.memo(Form);
