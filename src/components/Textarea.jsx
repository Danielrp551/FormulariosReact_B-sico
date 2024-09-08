

const Textarea = ( {defaultValue, label, name} ) => {

    return (
        <div className="ed-item form__item">
            <label htmlFor={name}>
                {label}
                <textarea
                    name={name}
                    id={name}
                    defaultValue={defaultValue}>
                </textarea>
            </label>
        </div>
    )
}

export default Textarea