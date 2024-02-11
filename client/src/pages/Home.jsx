import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {id:1,
  title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
img: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{id:2,
  title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg" },
{id:3,
  title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
img: "https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{id:4,
  title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis at quod quaerat doloremque distinctio laborum cupiditate, fugit rem eum.",
img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg" },

]
function Home() {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post)=>
          (
<div className="post" key={post.id}>
  <div className="img"><img src={post.img} alt="" /></div>
  <div className="content">
    <Link className="link" to={`/post/${post.id}`}>
     <h1>{post.title}</h1></Link>
     <p>{post.desc}</p>
     <button>Read More</button>
  </div>

</div>
          ))}
      </div>
    </div>
  )
}

export default Home