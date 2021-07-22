import { useRef } from "react";
import InputField from "../shared/InputField";
import { getUploadedFile } from "../assets/utils";
import { toLocale } from "../assets/utils";

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
                src={"/assets/images/Avatar.svg"}
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
            <p className="social-media-title">Social media</p>
            <div className="social-media-card">
              <div className="social-media-icon">
                <img
                  src={"/assets/images/Facebook.svg"}
                  alt="Facebook (Promotion Service)"
                />
              </div>
              <p className="social-media-name">Facebook</p>
              <button type="button" className="social-media-btn">
                <img src={"/assets/images/plus.svg"} alt="" />
              </button>
            </div>
            <div className="social-media-card">
              <div className="social-media-icon">
                <img
                  src={"/assets/images/Twitter-icon.svg"}
                  alt="Facebook (Promotion Service)"
                />
              </div>
              <p className="social-media-name">Twitter</p>
              <button type="button" className="social-media-btn">
                <img src={"/assets/images/plus.svg"} alt="" />
              </button>
            </div>
            <div className="social-media-card">
              <div className="social-media-icon">
                <img
                  src={"/assets/images/WKontakte.svg"}
                  alt="WKontakte (Promotion Service)"
                />
              </div>
              <p className="social-media-name">VKontakte</p>
              <button type="button" className="social-media-btn">
                <img src={"/assets/images/plus.svg"} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-wrapper-center">
          <div className="update-section">
            <form action="" autoComplete="off">
              <div className="mb-40">
                <InputField
                  type="url"
                  label="dribble"
                  title="Dribble Link"
                  required={true}
                />
                <InputField
                  type="url"
                  label="behance"
                  title="Behance Link"
                  required={true}
                />
              </div>
              <div className="mb-40">
                <InputField
                  type="email"
                  label="email"
                  title="E-mail"
                  required={true}
                  disabled={true}
                />
              </div>
              <div className="password-section">
                <p className="password-section-title">Password management</p>
                <InputField
                  type="password"
                  label="primary-password"
                  title="Primary password"
                  required={true}
                />
                <InputField
                  type="password"
                  label="new-password"
                  title="New password"
                  required={true}
                />
                <InputField
                  type="password"
                  label="confirm-password"
                  title="Confirm new password"
                  required={true}
                />
              </div>
              <button className="save-changes">Save changes</button>
            </form>
          </div>
        </div>
        <div className="profile-wrapper-right">
          <div className="personal-statistic">
            <p className="personal-statistic-title">Personal Statistic</p>
            <div className="personal-statistic-card">
              <div className="personal-statistic-card-icon">
                <img src={'/assets/images/like-icon.svg'} alt="Promotion Service" />
              </div>
              <div className="personal-statistic-info">
                <p className="personal-statistic-info_count">{toLocale(2562, 'en-us')}</p>
                <p className="personal-statistic-info_type">Likes delivered for all time</p>
              </div>
            </div>
            <div className="personal-statistic-card">
              <div className="personal-statistic-card-icon">
                <img src={'/assets/images/new-user.svg'} alt="Promotion Service" />
              </div>
              <div className="personal-statistic-info">
                <p className="personal-statistic-info_count">{toLocale(15, 'en-us')}</p>
                <p className="personal-statistic-info_type">New users invited</p>
              </div>
            </div>
            <div className="personal-statistic-card">
              <div className="personal-statistic-card-icon">
                <img src={'/assets/images/date.svg'} alt="Promotion Service" />
              </div>
              <div className="personal-statistic-info">
                <p className="personal-statistic-info_count">{toLocale(329, 'en-us')}</p>
                <p className="personal-statistic-info_type">Days since registration</p>
              </div>
            </div>
            <div className="personal-statistic-card">
              <div className="personal-statistic-card-icon">
                <img src={'/assets/images/dollar-sign.svg'} alt="Promotion Service" />
              </div>
              <div className="personal-statistic-info">
                <p className="personal-statistic-info_count">{toLocale(1456.23, 'en-us', 'USD')}</p>
                <p className="personal-statistic-info_type">Real money spent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
