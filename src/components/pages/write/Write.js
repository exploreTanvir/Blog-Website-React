import image2 from "../../Asset/image/singlePost.jpeg"
import "./write.css"

const Write = () => {
  return (
    <div className="write">
      <img src={image2} alt="#" className="writeImg"/>
        <form className="writeForm">
            <div className="writeFormGrp">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file"  className="writeInput" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title"className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGrp">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write