import { useRef } from "react";
import { getUploadedFile } from "../utils/getUploadedFile";

const Profile = () => {
    const uploadBtn = useRef();
    const uploadImg = useRef();

    const uploadPhoto = () => {
        uploadBtn.current.click();
    };

    return (
        <div>
            <div className="main-wrapper-title">Profile</div>
            <div className="profile-wrapper">
                <div className="profile-wrapper-left">
                    <div className="profile-wrapper-avatar">
                        <div className="profile-wrapper-avatar-img">
                            <img
                                ref={uploadImg}
                                src={"/assets/images/avatar.png"}
                                alt="Promotion Service User"
                            />
                        </div>
                        <input
                            onChange={(e) => getUploadedFile(e, uploadImg.current)}
                            ref={uploadBtn}
                            type="file"
                            hidden
                            accept="image/x-png,image/gif,image/jpeg"
                        />
                        <button onClick={uploadPhoto} className="upload-btn">
                            + Upload new photo
                        </button>
                    </div>
                    <div className="social-media">
                        
                    </div>
                </div>
                <div className="profile-wrapper-center">2</div>
                <div className="profile-wrapper-right">3</div>
            </div>
        </div>
    );
};

export default Profile;
