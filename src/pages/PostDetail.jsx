import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>WHY SHOULD YOU TRAVEL?</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
     The act of traveling has been an integral part of the human experience for centuries, transcending geographical boundaries and fostering connections among diverse cultures. While the motivations behind travel may vary from person to person, the benefits of exploring new places and embracing different lifestyles are universal. This essay explores the myriad reasons why individuals should embark on journeys, delving into the transformative power that travel holds.
     </p>
     <p>
     Travel satisfies the human desire for adventure and exploration. From climbing majestic mountains to diving into the depths of the ocean, each journey brings with it the thrill of the unknown. Adventure fosters a sense of accomplishment and resilience, challenging individuals to push beyond their comfort zones.

     </p>
     <p>
     Travel offers a respite from the demands of daily life, providing an opportunity for relaxation and stress relief. Whether it's lounging on a tropical beach or exploring a tranquil countryside, the change of scenery and pace can have positive effects on mental and physical well-being.
     </p>
      </div>
      <p>
        
      </p>
    </section>
  )
}

export default PostDetail
