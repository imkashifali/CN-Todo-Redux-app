import React, { useState } from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { ADD } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState('')
    console.log("somedata here", data)

    const saveData = () => {
        dispatch(ADD(data))
        setData('');
    }

    return (
        <div className="container">
            <section className='mt-3 text-center'>
                <h3>Enter Your Task</h3>

                <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                    <input name='task' onChange={(e) => setData(e.target.value)} value={data} className='form-control' />
                    <Button variant='contained'
                        onClick={() => saveData()}
                        style={{ background: "#ee5253" }} className='mx-2'>
                        <AddIcon />
                    </Button>
                </div>
                <Todo />
            </section>
        </div>
    )
}

export default Home