import React from 'react'
import PropTypes from 'prop-types'

const UserItem=({user:{title,poster_path}})=>{
   return(
     <div className="card text-center">
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
         alt=''
         style={{}}
         />
       <h3>{title}</h3>
     <div>
       <a href='/' className="btn btn-sm my-1 btn-dark">More</a>
     </div>
     </div>
   );
}
UserItem.propTypes={
  user:PropTypes.object.isRequired
}
export default UserItem;
