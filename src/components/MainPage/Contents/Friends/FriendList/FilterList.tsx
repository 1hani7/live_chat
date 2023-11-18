import React, { useState, useEffect, useRef } from 'react';
import './accordion.css';
import FilterModal from './FilterModal';

const FilterList:React.FC = () => {

    interface tem{
        name: string;
        online: boolean;
        stMsg: string;
    }

    const temp:tem[] = [
        {name: 'James Wood', online: false, stMsg: '상태 메세지입니다.'},
        {name: 'John doe', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Bobby Brown', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Jessica Simpson', online: false, stMsg: '상태 메세지입니다.'},
        {name: '김선향', online: true, stMsg: '상태 메세지입니다.'},
        {name: '송은선', online: true, stMsg: '상태 메세지입니다.'},
        {name: '전계림', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'James Wood', online: false, stMsg: '상태 메세지입니다.'},
        {name: 'John doe', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Bobby Brown', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Jessica Simpson', online: false, stMsg: '상태 메세지입니다.'},
        {name: '김선향', online: true, stMsg: '상태 메세지입니다.'},
        {name: '송은선', online: true, stMsg: '상태 메세지입니다.'},
        {name: '전계림', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'James Wood', online: false, stMsg: '상태 메세지입니다.'},
        {name: 'John doe', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Bobby Brown', online: true, stMsg: '상태 메세지입니다.'},
        {name: 'Jessica Simpson', online: false, stMsg: '상태 메세지입니다.'},
        {name: '김선향', online: true, stMsg: '상태 메세지입니다.'},
        {name: '송은선', online: true, stMsg: '상태 메세지입니다.'},
        {name: '전계림', online: true, stMsg: '상태 메세지입니다.'},
    ]

    return ( 
        <div className="d-flex flex-column">
            {
                temp.map((v, i) => (
                    <div className="accordion m-0 p-0 mb-2 border rounded
                    d-flex align-items-center" id={`accordionParent-${i}`} key={i}>
                        <div className='accordion-item w-100 shadow-sm border-0'>
                            <div className='accordion-header'>
                                <button className='accordion-button bg-white collapsed p-2 px-3' type='button'
                                data-bs-toggle='collapse' data-bs-target={`#collapse-${i}`}
                                aria-expanded='false' aria-controls={`collapse-${i}`}
                                style={{border:'none', boxShadow:'none'}}>
                                    <div className="flex-shrink-0 bg-secondary rounded-circle"
                                    style={{width:'45px', height:'45px'}}></div>
                                    <div className="d-flex flex-column text-body fw-bold ps-3">
                                        <p className="m-0 text-start">{v.name}</p>
                                        <small className="m-0 w-100 text-start text-secondary fw-normal">
                                            {v.stMsg}
                                        </small>
                                    </div>
                                    <div className={
                                        `ms-auto rounded-circle flex-shrink-0
                                        ${v.online? `bg-success` : `bg-danger` }`
                                    }
                                    style={{width:'15px', height: '15px'}}></div>
                                </button>
                            </div>
                            <div id={`collapse-${i}`} className="accordion-collapse collapse"
                            data-bs-parent={`accordionParent-${i}`}>
                                <div className='accordion-body btn-group w-100 rows'>
                                    <button className="btn btn-primary col-9">1:1 채팅하기</button>
                                    <button className="btn btn-outline-danger">삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

export default FilterList;