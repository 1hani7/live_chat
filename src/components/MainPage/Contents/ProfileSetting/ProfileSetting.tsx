import ProfileThumbnail from "./ProfileThumbnail";
import ProfileMsg from "./ProfileMsg";
import ProfileNameInfo from "./ProfileNameInfo";
import ProfileName from "./ProfileName";
import ProfilePassword from "./ProfilePassword";
import ProfileDel from "./ProfileDel"
function ProfileSetting() {
    return (
        <div className="w-100 h-100 bg-white rounded
        container-fluid h-100 px-5 py-4 overflow-scroll">
            <h3 className="fw-bold m-0 p-0">Profile</h3>
            <div className="border-bottom py-4
            d-flex justify-content-center">
                <div className="d-flex flex-column row-gap-3"
                style={{ width: '700px', maxWidth: '700px' }}>
                    <div className="d-flex flex-column flex-md-row align-items-center
                    column-gap-md-3 text-center text-md-start border p-3 rounded">
                        <ProfileThumbnail />
                        <ProfileNameInfo />
                    </div>
                    <ProfileMsg />
                    <ProfileName />
                    <ProfilePassword />
                    <ProfileDel />
                </div>
            </div>
        </div>
    );
}

export default ProfileSetting;