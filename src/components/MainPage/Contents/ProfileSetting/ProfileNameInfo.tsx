import React, { useEffect } from 'react';

type info = {
    name: string;
    initId: string;
}

const ProfileNameInfo = ({name, initId}:info) => {
    return (  
        <div>
            <h4 className="fw-semibold">{name}</h4>
            <h6 className="text-secondary">{initId}</h6>
        </div>
    );
}

export default ProfileNameInfo;