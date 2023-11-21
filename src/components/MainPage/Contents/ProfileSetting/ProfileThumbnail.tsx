import React from 'react';

type info = {
    name: string;
}

const ProfileThumbnail = ({name}:info) => {
    return (
        <div className=''>
            <label className='thumbnailT rounded-circle bg-primary flex-shrink-0 overflow-hidden
            d-flex align-items-center justify-content-center'
            htmlFor="photo"
            style={{width:'100px', height:'100px'}}
            // onMouseOver={thumbnailOverlay}
            // onMouseLeave={thumbnailOverlayOff}
            >
                <h1 className='text-white m-0 p-0'>{name.split('')[0]}</h1>
                {/* <div className='overlay d-none w-100 h-100
                text-white fw-bolder display-1'
                style={{background:'rgba(0,0,0,0.3)'}}>
                    <div className='text-center' style={{lineHeight:'85px'}}>+</div>
                </div> */}
            </label>
            {/* <input type='file' id="photo" className=""
            style={{ width: '0px', height: '0px', border:'none' }}>
            </input> */}
        </div>
    );
}

const thumbnailOverlay:React.MouseEventHandler<HTMLLabelElement> = () => {
    const overlay = document.querySelector('.overlay') as Element;
    overlay?.classList.remove('d-none');
}
const thumbnailOverlayOff:React.MouseEventHandler<HTMLLabelElement> = () => {
    const overlay = document.querySelector('.overlay') as Element;
    overlay?.classList.add('d-none');
}

export default ProfileThumbnail;