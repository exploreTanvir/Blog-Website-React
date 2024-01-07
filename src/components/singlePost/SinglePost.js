import image2 from "../Asset/image//singlePost.jpeg"
import "./singlePost.css"
const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={image2} alt="#" className="singlePostImg"/>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b>Tanvir Hossen Raju</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur optio, unde recusandae odio ipsum inventore! Quaerat et est sed quisquam, quam ipsum quibusdam fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur optio, unde recusandae odio ipsum inventore! Quaerat et est sed quisquam, quam ipsum quibusdam fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur optio, unde recusandae odio ipsum inventore! Quaerat et est sed quisquam, quam ipsum quibusdam fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur optio, unde recusandae odio ipsum inventore! Quaerat et est sed quisquam, quam ipsum quibusdam fugit.</p>
        </div>
    </div>
  )
}

export default SinglePost