import headerimg from "../Asset/image/header.webp"
import './header.css'
const Header = () => {
  return (
    <div>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blogs</span>
            <img className="headerImg" src={headerimg} alt=""/>
        </div>
    </div>
  )
}

export default Header