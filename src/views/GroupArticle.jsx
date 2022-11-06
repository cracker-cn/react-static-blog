import React,{useState,useEffect} from 'react'
import Layout from "../widget/Layout"
import { Link } from "react-router-dom";
import axios from "axios"
import {getQueryVariable} from "../utils/commonUtil"

function GroupArticle(props) {
  const [name,setName]=useState("");
  const [list,setList]=useState([]);
  useEffect(()=>{
    let _id=getQueryVariable("id");
    const fetchData=async ()=>{
      const groups=(await axios.get("/api/group.json")).data;
      let group=groups.find(h=>h.id===Number(_id));
      if(group&&group.name){
        setName(group.name);
        const posts=(await axios.get("/api/post.json")).data;
        setList(posts.filter(h=>h.groupIds.split(",").indexOf(_id)!==-1));
      }
      else{
        setList([]);
      }
    }
    if(_id&&_id>=0){
      fetchData();
    }
  },[])
  return (
    <Layout>
    <div style={{
        padding: "30px"
      }}>
      <div className="h-text-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value">{name}</div>
          </div>
        </div>
        <div className="h-mt-4 h-text-left">
          <ul className="steps steps-vertical">
            {list.map(h=><li key={h.id} className="step step-primary"><Link className="link link-primary" to={"/a?id="+h.id}>{h.date}&nbsp;~&nbsp;{h.title}</Link></li>)}
            {list.length===0&&
              <h5>空空如也</h5>
            }
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default GroupArticle
