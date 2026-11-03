import { useState , useEffect} from "react";
import axios from "axios";
const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "https://images.unsplash.com/photo-1790206473704-cce295ba55b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            caption: "A beautiful sunset over the mountains."
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            console.log(res.data);
            setPosts(res.data.posts);
        }) 

    },[]);
  return (
        <div >
            <div className='post-card flex flex-col items-center justify-start gap-4  '>
            {posts.map((posts) => (
                <div key={posts._id} className='bg-white p-10 border-r-8 rounded-lg w-160 mb-20'>
                    <img src={posts.image} alt="Post" className='w-full h-80 rounded fit-content' />
                    <p>{posts.caption}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Feed