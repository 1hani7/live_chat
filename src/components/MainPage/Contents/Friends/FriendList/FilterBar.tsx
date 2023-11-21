import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nowFSVal } from '../../../../../features/SearchFriendSlice';

const FilterBar = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState<string>('');

    const nowFSValChange = () => {
        dispatch(nowFSVal(search));
    }

    const nowFSValChangeOnKey = (event:any) => {
        if( event.keyCode === 13 ){
            dispatch(nowFSVal(search));
        }
    }

    return (
        <div className="d-flex flex-column flex-xl-row justify-content-between
            align-items-xl-center">
            <h3 className="fw-bolder text-body m-0 me-4 mb-2 mb-xl-0">Friends</h3>
            <div className="input-group">
                <input type="text" name='friendSearch' id='friendSearch'
                    className="form-control"
                    placeholder="search..." 
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={nowFSValChangeOnKey} />
                <label htmlFor="friendSearch"
                    className="input-group-text btn btn-primary"
                    onClick={nowFSValChange}>
                    <i className="bi bi-search"></i>
                </label>
            </div>
        </div>
    )
}

export default FilterBar;