// props parameter is automatically added to functions by React
function Modal(props) { 
    function cancelHandler() {
        props.onCancel();
    }
    
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            {/* This syntax also works */}
            {/*<button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>*/}
            <button className='btn' onClick={confirmHandler}>
                Confirm
            </button>
        </div>
    );
}

export default Modal;