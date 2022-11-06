import React,{Component} from "react"
import Layout from "../widget/Layout"
import Post from "../widget/Post"

export default class Index extends Component{
  render(){
    return (
      <Layout>
        <Post/>
      </Layout>
    )
  }
}
