


function Alert(props){
    return (
    <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <div className="alert-buttons">
                <button className={"alert-button alert-cancel"} type={"button"}
                        onClick={props.onClose}>
                    {props.cancelName}
                </button>
                <button className={"alert-button alert-ok"} type={"button"}
                        onClick={() => {
                            props.onOk();
                            props.onClose();
                        }}>
                    {props.okName}
                </button>
            </div>
        </div>
    </div>)
}

export default Alert;

