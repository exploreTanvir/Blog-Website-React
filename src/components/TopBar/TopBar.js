import { Link } from "react-router-dom"
import image1 from "../Asset/image/1.jpeg"
import './topbar.css'
const TopBar = () => {
    const user=true
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
                <li className='topListItem'>
                    <Link to="/"className="link">HOME</Link>
                </li>
                <li className='topListItem'>
                <Link to="/post"className="link">POST</Link>
                </li>
                <li className='topListItem'>
                <Link to="/settings"className="link">SETTINGS</Link>
                </li>
                <li className='topListItem'>
                <Link to="/write"className="link">WRITE</Link>
                </li>
                <li className='topListItem'>
                <Link to="/register"className="link">{user&&"LOGOUT"}</Link>
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user?(<img className="topImg" src={image1} alt='#'/>):
                (<ul className="topList">
                      <li className="topListItem"><Link to="/login"className="link">LOGIN</Link></li>
                    <li className="topListItem">  <Link to="/register"className="link">REGISTER</Link></li>
                </ul>)
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar