

const Select = ( {defaultValue="", label, name, options=[]} ) => {

    return (
        <div className="ed-item form__item">
            <label htmlFor={name}>
                {label}
                <select defaultValue={defaultValue} name={name}>
                    <option value="">-Seleccionar-</option>
                    {
                        options.map(({val, content}) => (
                            <option key={val} value={val}>{content}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}

export default Select