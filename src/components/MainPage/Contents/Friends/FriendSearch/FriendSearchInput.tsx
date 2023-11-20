import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newFSVal } from '../../../../../features/SearchFriendSlice';
const FriendSearchInput:React.FC = () => {

    const dispatch = useDispatch();
    
    return (
        <div className="input-group">
            <form className="input-group">
                <input type="text" name='friendSearch' id='friendSearch'
                    className="form-control"
                    placeholder="search..."
                    onChange={(e) => dispatch(newFSVal(e.target.value))} />
                <label htmlFor="friendSearch"
                    className="input-group-text btn btn-primary">
                    <i className="bi bi-person"></i>
                </label>
            </form>
        </div>
    );
}

export default FriendSearchInput;