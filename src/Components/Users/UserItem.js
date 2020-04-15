import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../Layout/Modal.js'
class UserItem extends React.Component {
  static state={
    modal:true
  };
  render () {
    const {title,poster_path,overview}=this.props.user;
  return(
    <div className="card text-center">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=''
        style={{}}
        />
      <Modal user={this.props.user}></Modal>
      <div className="cont">
      <ul className='like'> <li><a href="#"className="fas fa-thumbs-up"></a></li></ul>
      <p className='titl'>{overview.substring(0,150)}...</p>
  </div>
    </div>
  );
};
}

export default UserItem;
// UserItem.propTypes={
//   user:PropTypes.object.isRequired
// }
