import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import Layout from "../widget/Layout"
import axios from "axios"

function Group() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/group.json")
      setList(result.data);
    }
    fetchData();
  }, []);
  return (<Layout>
    <div style={{
        padding: "30px"
      }}>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>分类名称</th>
              <th>描述</th>
              <th>文章数</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => <tr key={item.id}>
                <td>{index+1}</td>
                <td><Link className="link link-primary" to={"/ga?id="+item.id}>{item.name}</Link></td>
                <td>{item.desc}</td>
                <td>{item.count}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </Layout>)
}

export default Group
