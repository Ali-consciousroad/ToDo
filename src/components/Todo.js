import { useState } from 'react';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';

function Todo(props){

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className='card'>
        <h2>{props.text}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
          {/* Display the modal if the state of modalIsOpen is true */}
          
          {/*{ modalIsOpen ? <Modal /> : null }*/}
          {/* Tip: Shorter way to write that condition */}
          {modalIsOpen && <Modal />}
          {modalIsOpen && <Backdrop />}          
          
      </div>
    );
}

export default Todo;