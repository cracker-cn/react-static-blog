import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom";

export default function Footer() {
  const [filingNo, setNo] = useState("");
  const [filingNoUrl,setUrl]= useState("");
  useEffect(() => {
    const fetchData = async () => {
      const config = (await axios.get("/api/config.json")).data;
      setNo(config.filingNo);
      setUrl(config.filingNoUrl);
    }
    fetchData();
  }, [])
  return (<footer className="footer footer-center p-4 text-base-content h-mt-4">
    <div>
      <p>Copyright © 2022 - 版权所有，翻版必究&emsp;|&emsp;
        <Link className="link link-secondary" to={filingNoUrl} target="_blank">{filingNo}</Link>
      </p>
    </div>
  </footer>)
}
