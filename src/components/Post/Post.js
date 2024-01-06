import "./post.css"

const Post = () => {
  return (
    <div className="post">     
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet 
            </span> <hr/>
            <span className="postDate">
            1 hour ago
            </span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolore quam? Ullam harum assumenda ipsam? Omnis, error. Maiores ipsum exercitationem facilis.
        </p>
    </div>
  )
}

export default Post