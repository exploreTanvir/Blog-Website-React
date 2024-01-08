import image2 from "../../Asset/image/singlePost.jpeg"
import SlideBar from "../../SlideBar/Sidebar"
import "./settings.css"
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
              <img src={image2} alt="#"/>
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file"id="fileInput" className="settingsPPInput" style={{display:"none"}}/>
              </div>
              <label>Username</label>
              <input type="text" placeholder="username"/>
              <label>Email</label>
              <input type="email" placeholder="user@gmail.com"/>
              <label>Password</label>
              <input type="password"/>
              <button className="settingsSubmitButton">Update</button>
          </form>
      </div>
      <SlideBar/>
    </div>
  )
}

export default Settings