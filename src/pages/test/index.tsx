import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { safeMint } from 'src/store/admin/asyncTasks';
import store from 'src/store/store';

type AppDispatch = typeof store.dispatch;

const Test = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <Container>
            <button onClick={() => dispatch(safeMint())}>SafeMint</button>
        </Container>
    )
}

export default Test

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    button {
        cursor: pointer;
        padding: 10px;
        border: 1px solid #000000;
        background-color: #ffffff;
    }
`