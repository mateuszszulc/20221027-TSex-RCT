
// Jeśli callback to bezpośrednio event: React.ChangeEvent<HTMLInputElement>

type SearchBoxProps = {
    placeholder: string;
    onSearch?(text: string): void;
}

export function SearchBox({ placeholder = 'Search for...', onSearch }: SearchBoxProps) {
    return (
        <div className="field">
            <p className="control has-icons-left">
                <input
                    className="input"
                    type="text"
                    placeholder={placeholder}
                    onChange={(ev) => onSearch?.(ev.target.value.toLowerCase())}
                />
                <span className="icon is-small is-left">
                    🔎
                </span>
            </p>
        </div>
    )
}
