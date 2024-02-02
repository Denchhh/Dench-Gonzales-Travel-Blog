import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className="footer__categories">
        <li><Link to="/posts/categories/:Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/:Business">Business</Link></li>
        <li><Link to="/posts/categories/:Education">Education</Link></li>
        <li><Link to="/posts/categories/:Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categories/:Art">Art</Link></li>
        <li><Link to="/posts/categories/:Investment">Investment</Link></li>
        <li><Link to="/posts/categories/:Best Tourist Spots">Best Tourist Spots</Link></li>
        <li><Link to="/posts/categories/:Sightseeing">Sightseeing</Link></li>
    </ul>
     <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, Pilot Travel Centers.</small>
     </div>


   </footer>
  )
}

export default Footer
