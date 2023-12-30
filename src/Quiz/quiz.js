
import { useContext,  useState } from "react";
import arr from "./Data";
import { useNavigate } from "react-router-dom";
import style from './style.module.css'
import { NameContext } from "../App";
import Timer from "./Timer";
function Quiz(){
    var obj1=useContext(NameContext)
    var [Index,setIndex]=useState(0)
    var [Ans,setAns]=useState({})
    var Navigate=useNavigate()
    var [Arr,setArr]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const handleClick2=(e)=>{
        e.preventDefault()
        var a=Index;
        var b=e.target.value;
        var l={}
        l[a]=b
        var k=Arr
        k[Index]=1;
        setArr(k)
        setAns({...Ans,...l})
    }
    const handleClick=()=>{
        if(Index<19){
            setIndex(Index+1)
        }
    }
    const handleClick3=()=>{
        console.log(obj1)
        let answerd_Questions=Object.keys(Ans).length
        let Unanswered_Questions=20-answerd_Questions
        let Correct_Answers=0
        let i;
        for(i=0;i<arr.length;i++){
            if(arr[i]['Answer']===Ans[i]){
                console.log('true')
                Correct_Answers++
            }
        }
        obj1.AnsQues=answerd_Questions
        obj1.UnAnsQues=Unanswered_Questions
        obj1.CorQues=Correct_Answers 
        Navigate('/result')
    }
    return(
            <div>
            <div className={style.containerQuiz1}>
                <h4><i className="fa fa-user-circle"></i> {obj1.Name}</h4><Timer func={handleClick3}/>
            </div>
            <div className={style.containerQuiz2}>
                <div className={style.question} key={Index}>
                <label className={style.Answer}>Question {Index+1} : {arr[Index]['Question']}</label><br/>
                <p>Options</p>
                <p className={style.Answer}><input  type="radio" name="answer" value={arr[Index]["Option1"]} onChange={handleClick2}/> {arr[Index]["Option1"]}</p>
                <p className={style.Answer}><input  type="radio" name="answer" value={arr[Index]["Option2"]} onChange={handleClick2}/> {arr[Index]["Option2"]}</p>
                <p className={style.Answer}><input type="radio" name="answer" value={arr[Index]["Option3"]} onChange={handleClick2}/> {arr[Index]["Option3"]}</p>
                <p className={style.Answer}><input  type="radio" name="answer" value={arr[Index]["Option4"]} onChange={handleClick2}/> {arr[Index]["Option4"]}</p>
                {
                    Index<19
                    ?
                    <center><button className="btn btn-info" onClick={handleClick} style={{width:'fit-content'}}>Next ques</button></center>
                    :
                    <center><button className="btn btn-success" onClick={handleClick3} style={{width:'fit-content'}}>Submit</button></center>
                }
                </div>
                <div className={style.buttoncon}>
                    {
                        Arr.map((ele,i)=>{
                            return(
                                (ele===0)
                                ?
                                (i===Index)?
                                <button className={`btn btn-warning ${style.btnOnStyle}`}>{i+1}</button>
                                :
                                (i<Index)
                                ?
                                <button className={`btn btn-danger ${style.btnStyle}`}>{i+1}</button>
                                :
                                <button className={`btn btn-warning ${style.btnStyle}`}>{i+1}</button>
                                :
                                (i===Index)?
                                <button className={`btn btn-success ${style.btnOnStyle}`}>{i+1}</button>
                                :
                                <button className={`btn btn-success ${style.btnStyle}`}>{i+1}</button>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className={style.footer}>
                    Copy Right @2023 <b>SR</b> web applications
            </div>
        </div>
    )
}
export default Quiz;