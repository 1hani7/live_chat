import React from 'react';

const ProfileThumbnail:React.FC = () => {
    return (
        <div className=''>
            <label className='thumbnailT rounded-circle bg-primary flex-shrink-0 overflow-hidden'
            htmlFor="photo"
            style={{width:'100px', height:'100px', cursor:'pointer'}}
            onMouseOver={thumbnailOverlay}
            onMouseLeave={thumbnailOverlayOff}>
                <div className='overlay d-none w-100 h-100
                text-white fw-bolder display-1'
                style={{background:'rgba(0,0,0,0.3)'}}>
                    <div className='text-center' style={{lineHeight:'85px'}}>+</div>
                </div>
            </label>
            <input type='file' id="photo" className=""
            style={{ width: '0px', height: '0px', border:'none' }}>
            </input>
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