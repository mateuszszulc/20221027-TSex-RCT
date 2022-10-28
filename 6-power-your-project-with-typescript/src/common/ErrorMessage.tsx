type PropTypes = {msg: string}

function ErrorMessage({msg}: PropTypes) {
    return (
        <div className="alert alert-danger col-12 text-center">
            {msg}
        </div>
    )
}

export default ErrorMessage;
