import image1 from "../Asset/image/1.jpeg"
import "./sideBar.css"

const SlideBar = () => {
  return (
    <div className="sideBar">
        <div className="sideBarItem">
          <span className="sideBarTitle">ABOUT ME</span>
          <img className="imgRight" src={image1} alt='#'/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolore quam? facilis eum quas nemo quasi vitae dignissimos soluta totam. Est.
          </p>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">CATEGORIES</span>
          <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sports</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">FOLLOW US</span>
          <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
            <i className="sideBarIcon fa-brands fa-square-twitter"></i>
            <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
            <i className="sideBarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
    </div>
  )
}

export default SlideBar