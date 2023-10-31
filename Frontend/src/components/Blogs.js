import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";
import { color } from 'style-value-types';



function Blogs() {
    const [open2,setOpen2]=useState(false);
    const [blogdata,setBlogdata]=useState({});

    

    const [blogs, setBlogs] = useState([{}]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [userid, setUserid] = useState(localStorage.getItem('userid'));
    console.log("inside", userid);


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpen2 = (blog) => {
        setBlogdata(blog);
        setOpen2(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const getBlogs = async () => {
        const res = await axios.get("https://army-seva.vercel.app/api/blogs/");

        setBlogs(res.data);
        // console.log(blogs)
    }
  
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const res = await axios.post(`https://army-seva.vercel.app/api/blogs/createblog/${userid}`,
                JSON.stringify({ title, content }),
                {
                    headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token') },
                    withCredential: true
                });
            // handleClose();

        } catch (err) {
            if (!err?.res) {
                console.log('NO RESPONSE');

            } else if (err.res?.status === 409) {
                console.log("Product exists")
            } else console.log("product addition failed");

        }
    }
    useEffect(() => {

        getBlogs();

    }, [])
    return (
        <>
        
            <div className='whole-blog'>

                    <div className='card-deck' >
                        {
                            
                            blogs.map((blog, index) => (
                                 <Link to="/blog">
                                <div className="blogs_card" key={index} onClick={()=>handleClickOpen2(blog)}>
                                   
                                    <div className="card-body">
                                        <h6 className="card-title" >{blog.title}</h6>
                                      
                                        <i>{blog.name}</i>
                                        <p className='card-text' >{blog.content} </p>
                  
                                    </div>
                                    
                                </div>
                                 </Link>
                            ))


                        }
                    </div>
      


            <button variant="outlined" className='add_blog' onClick={handleClickOpen} >
                ADD BLOG
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ADD YOUR BLOG</DialogTitle>
                <form >
                    <div className="form-group">

                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </form>

            </Dialog>
            <Dialog open={open2} onClose2={handleClose2}>
                <DialogTitle style={{fontWeight: "bolder",fontSize:"25px"}}>{blogdata.title}</DialogTitle>
                <h6 className="card-subtitle mb-2 text-muted" style={{marginLeft: "20px",fontSize:"22px",fontStyle:"italic"}}>{blogdata.name}</h6>

                    
                    <div className="blog_card" style={{marginTop: "10px",marginLeft:"10px",marginRight: "10px" }}>
                <div className="card-body">

                {/* <h3 className="card-title" style={{margin: "10px",alignContent:"center",marginBottom:"25px"}} > {blogdata.title}</h3> */}

                
                
                <p className="card-text" style={{margin: "10px", fontSize:"20px"}}>{blogdata.content} </p>

                <DialogActions style={{marginBottom: "10px"}}>
                        <Button onClick={handleClose2} className="cancel_btn">Cancel</Button>
                    </DialogActions>  
                                    </div>
                                    
                                </div>

            </Dialog>
            </div>
        </>

    )
}

export default Blogs

{/* <Dialog open={open} onClose={handleClose}>
<DialogTitle>ADD YOUR BLOG</DialogTitle>
<form className="add_blog">
    <div className="form-group">

        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
    <div className="form-group">

        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
    </div>


    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    </div>
    <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
    </DialogActions>
</form>

</Dialog> */}