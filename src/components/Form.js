import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                placeholder="wpisz miasto..."
                value={props.value}
                onChange={props.change}
            />
            <button>Wyszukaj</button>
        </form>
    );
}

export default Form;
