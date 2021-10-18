import React, { useState } from 'react'
import Buttonis from './UI/Button/MyButton'
import Inputis from './UI/Input/Myinput'


const Postform = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
     const newPost = {
         ...post, id:Date.now()
     }
     create(newPost) 
        setPost({ title: '', body: '' })
    }
    return (
        <div>
            <form >
                {/* Controlable Component */}
                <Inputis
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type='text'
                    placeholder='Напиши тему!' />
                {/* Not a controable comp */}
                <Inputis
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type='text'
                    placeholder='Напиши описание темы!' />
                <Buttonis onClick={addNewPost}>Добавить</Buttonis>
            </form>

        </div>
    )

}

export default Postform