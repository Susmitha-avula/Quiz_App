import { useContext, useRef } from "react";
import { NameContext } from "../App";
import img1 from "./Images/download (1).jpeg"
import Styles from "./style.module.css"
import { useNavigate } from "react-router-dom";
function Instuction(){
    var obj=useContext(NameContext)
    var Navigate=useNavigate()
    var User=useRef()
    const handleUser=(e)=>{
        e.preventDefault()
        if(User.current.value.length>0)
            obj.setName(User.current.value)
        Navigate("/quiz")
    }
    return(
        <div className={Styles.containerIns}>
      <img src={img1} alt="quiz" width={"100%"} height={"100%"} className={Styles.Img} />
      <div className={Styles.box}>
        <h3>Instructions</h3>
        <ul>
          <li>This Quiz contains 20 question</li>
          <li>It has a time limit of 10 minutes</li>
          <li>Score for each question is +1</li>
          <li>Once you click on next button you cannot back to previous questions</li>
        </ul>
        <form>
          <label>Enter Your Name:</label>
          <input type="text" ref={User} className="form-control"/><br/>
            <input type="submit" value={"Let's Start"} onClick={handleUser} className="btn btn-success"/>
        </form>
      </div> 
    </div>
    )
}
export default Instuction;