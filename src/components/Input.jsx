

const Input = ( { type, defaultValue, label, name, checked} ) => {

    return (
        <div className="ed-item form__item">
            <label htmlFor={name}>
                {label}
                <input
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={defaultValue}
                    defaultChecked= {checked}    
                >
                </input>
            </label>
        </div>
    )
}

export default Input