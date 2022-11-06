import React, {useState, useEffect} from "react"
import Layout from "../widget/Layout"
import axios from "axios"
import {getQueryVariable} from "../utils/commonUtil"
import "../css/typo.css"
import 'highlight.js/styles/atom-one-dark.css';
import "../css/code.css"

const {Remarkable} = require("remarkable");
const hljs = require('highlight.js');
hljs.initHighlighting();

function createMarkup(content) {
  return {__html: content};
}

export default function Article() {
  const [html, setHtml] = useState(<h5>空空如也</h5>);
  useEffect(() => {
    let _id = getQueryVariable("id");
    const fetchData = async () => {
      const posts = (await axios.get("/api/post.json")).data;
      let post = posts.find(h => h.id === Number(_id));
      if (post && post.url) {
        const md = (await axios.get(post.url)).data;
        const mdTemplate = new Remarkable({
          highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(lang, str).value;
              } catch (err) {}
            }
            try {
              return hljs.highlightAuto(str).value;
            } catch (err) {}
            return "";
          }
        });
        setHtml(mdTemplate.render(md));
      }
    }
    if (_id && _id >= 0) {
      fetchData();
    }
  }, [])
  return (<Layout>
    <div style={{
        padding: "30px"
      }}>
      <div dangerouslySetInnerHTML={createMarkup(html)}></div>
    </div>
  </Layout>)
}
