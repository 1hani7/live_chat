import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newFSVal } from '../../../../../features/SearchFriendSlice';
const FriendSearchInput:React.FC = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState<string>('');

    const newFSValChange = () => {
        dispatch(newFSVal(search));
    }
    
    const newFSValChangeOnKey = (event:any) => {
        if( event.keyCode === 13 ){
            dispatch(newFSVal(search));
        }
    }
    
    return (
        <div className="input-group">
            <div className="input-group">
                <input type="text" name='friendSearch' id='friendSearch'
                    className="form-control"
                    placeholder="search..."
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={newFSValChangeOnKey} />
                <label htmlFor="friendSearch"
                    className="input-group-text btn btn-primary"
                    style={{cursor:'default'}}
                    onClick={newFSValChange}>
                    <i className="bi bi-person"></i>
                </label>
            </div>
        </div>
    );
}

export default FriendSearchInput;