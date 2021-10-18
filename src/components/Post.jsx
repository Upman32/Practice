import React from 'react'
import { useHistory } from 'react-router'
import Buttonis from './UI/Button/MyButton'

const Post = (props) => {
  const Router = useHistory()
    return (
<div className="post">
  <div className="post_content">
    <strong>{props.post.id}. {props.post.title}</strong>
    <div>
     {props.post.body}
    </div>

  </div>
<div className="post__btns">
<Buttonis onClick={()=> Router.push(`/posts/${props.post.id}`)}>
    Коментарии
    </Buttonis>
  <Buttonis onClick={()=> props.remove(props.post)}>
    Удалить
    </Buttonis>
</div>
</div>)
}
export default Post