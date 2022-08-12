import React, { useContext, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveModeratorSharp } from '@mui/icons-material';
import { RMV ,UPD} from '../redux/actions/action'
const Todo = () => {
    const { user_Data } = useSelector((state) => state.todoReducer)
    console.log('user_Data', user_Data)
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const [showeye, setShoweye] = useState(false);
    const [showeyevalue, setShoweyevalue] = useState('');

    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState('');
    const [index, setIndex] = useState('');

    const handleShow = (ele) => {
        setShow(true)
        setUpdate(ele)
    }


// delete function 
    const removedata = (id) => {
        console.log(id)
        dispatch(RMV(id))
    }


    const updateTask = () =>{
        console.log("send data actions",update,index)
        dispatch(UPD(update,index))
        handleClose()
    }


    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2">
                {user_Data.map((ele, k) => {
                    return (
                        <>
                            <div className="todo_container mb-2 d-flex justify-content-between align-items-center px-2" key={k} style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}>
                                <li style={{ listStyle: "none" }}>{ele}</li>
                                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">

                                    <ModeEditIcon
                                        onClick={() => {
                                            handleShow(ele)
                                            setIndex(k)
                                        }}

                                        style={{ color: "#3c40c6", cursor: "pointer" }} />
                                    <DeleteIcon
                                        onClick={() => removedata(k)}
                                        style={{ color: "red", cursor: "pointer" }} />
                                    <RemoveRedEyeIcon
                                        onClick={() => {
                                            setShoweye(true)
                                            setShoweyevalue(ele)
                                        }}
                                        style={{ color: "#1dd1a1", cursor: "pointer" }} />
                                </div>
                            </div>
                        </>
                    )
                })
                }
                {/* read modal */}
                <Modal show={showeye}>
                    <h1 className='text-center'>{showeyevalue}</h1>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShoweye(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* update modal */}

                <Modal show={show} onHide={handleClose}>
                    <h3>Update Task</h3>
                    <Modal.Header closeButton>
                    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                    <input name='task'
                     onChange={(e) => setUpdate(e.target.value)} 
                     value={update} className='form-control' />
                    
                </div>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>updateTask()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Todo