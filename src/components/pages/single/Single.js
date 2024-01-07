import SinglePost from "../../singlePost/SinglePost";
import SlideBar from './../../SlideBar/Sidebar';
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost/>
      <SlideBar/>
    </div>
  )
}

export default Single