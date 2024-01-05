import image1 from "../Asset/image/1.jpeg"
import './topbar.css'
const TopBar = () => {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className="topImg" src={image1} alt='#'/>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar