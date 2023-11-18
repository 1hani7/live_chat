import React from 'react';


interface FilterModal {
    UserName: string;
}

const FilterModal: React.FC<FilterModal> = (props) => {
    return (
        <div className="">
            <h5 className="">{props.UserName}</h5>
        </div>
    );
}

export default FilterModal;