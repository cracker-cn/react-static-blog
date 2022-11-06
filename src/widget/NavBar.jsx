import React,{Component} from "react"
import { Link } from "react-router-dom";

const navOptions=[
  {key:1,name:"分类",url:"/g"},
  {key:2,name:"关于",url:"/a?id=1"}
]

export default class NavBar extends Component{
  render(){
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">个人笔记</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {navOptions.map((item)=><li key={item.key}><Link to={item.url}>{item.name}</Link></li>)}
          </ul>
        </div>
      </div>
    )
  }
}
