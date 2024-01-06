import Header from "../../Header/Header"
import Posts from "../../Posts/Posts"
import SlideBar from "../../SlideBar/Sidebar"
import "./Home.css"


const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
         <Posts/>
        <SlideBar/>
        </div>
    </>
  )
}

export default Home