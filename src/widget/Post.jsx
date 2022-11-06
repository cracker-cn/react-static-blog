import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import axios from "axios"
import "../css/post.css"

export default function Post() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = (await axios.get("/api/post.json")).data;
      const groups = (await axios.get("/api/group.json")).data;
      let result = [];
      for (const item of data) {
        let temp = Object.assign({
          groups: []
        }, item);
        let arr = item.groupIds.split(",");
        arr.forEach((id) => {
          let d = groups.find(x => x.id === Number(id));
          temp.groups.push({
            url: "/ga?id=" + id,
            name: d.name
          })
        });
        result.push(temp);
      }
      setList(result);
    }
    fetchData();
  }, [])
  return (<div className="post-list">
    {
      list.map((item, index) => <div className="post-item" key={index}>
        <div className="post-item-info">
          <Link className="post-title" to={"/a?id="+item.id} title={item.title}>{item.title}</Link>
          <div className="post-description">{item.summary}</div>
          <div className="post-meta-wrap">
            <span className="post-meta-date">
              <i className="iconfont icon-riqi_o"></i>
              <span>{item.date}</span>
            </span>
            {
              item.groups.map((g,i) => <span key={i} className="post-tag">
                <Link to={g.url} className="btn btn-outline btn-xs">{g.name}</Link>
              </span>)
            }
          </div>
        </div>
      </div>)
    }
    {
      false && <div className="pagination">
          <div className="btn-group">
            <button className="btn btn-sm">1</button>
            <button className="btn btn-sm btn-active">2</button>
            <button className="btn btn-sm">3</button>
            <button className="btn btn-sm">4</button>
          </div>
        </div>
    }
  </div>)

}
