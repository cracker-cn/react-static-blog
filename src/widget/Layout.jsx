import React from "react"
import NavBar from "../widget/NavBar"
import Footer from "../widget/Footer"

export default function Layout(props){
  return (
    <>
      <div className="card bg-base-100 shadow-xl h-container">
        <NavBar />
        {props.children}
      </div>
      <Footer />
    </>
  )
}
