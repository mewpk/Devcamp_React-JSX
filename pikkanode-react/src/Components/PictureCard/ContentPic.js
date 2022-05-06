import React from 'react'

export default function ContentPic() {

  let Date ={ time : "10/02/2020"}
  let Like = { likes : 20}
  let Comment = { content : "Noting"}



  return (
    <>
    <h3>Date : {Date.time} </h3>
    <p>Like : {Like.likes}</p>
    <p>Comment : {Comment.content}</p>
    </>
  )
}
