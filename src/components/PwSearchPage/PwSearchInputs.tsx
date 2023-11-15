import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PwSearchInputs() {
    const nav = useNavigate();
    return (
        <div className='d-flex flex-column row-gap-5'>
            <form className='d-flex flex-column row-gap-3'>
                <label htmlFor='email' className='text-secondary'>이메일을 입력해주세요.</label>
                <input type="email" id='email' name='email'
                    placeholder='Email' className='form-control' />
            </form>
            <div className='d-flex'>
                <button className='btn btn-primary w-50 me-3'
                    onClick={() => nav(-1)}>
                    확인</button>
                <button className='btn btn-outline-secondary w-50'
                    onClick={() => nav(-1)}>
                    취소</button>
            </div>
        </div>
    )
}