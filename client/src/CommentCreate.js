/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import axios from "axios";


export default ({postId}) => {
    const [content, setContent] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(content);
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        });
        setContent("");
    }
  
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input type="text" value={content} onChange={e => setContent(e.target.value)} className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
           
        </div>)
}