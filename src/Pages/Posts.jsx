import React, { useEffect, useRef, useState } from 'react';
import Paginator from '../components/UI/paginator';
import { getPageCount } from '../Utils/pages';
import Postservice from '../components/API/api';
import Postfilter from '../components/Postfilter';
import Postform from '../components/Postform';
import PostList from '../components/PostList';
import Buttonis from '../components/UI/Button/MyButton';
import { useFetching } from '../components/UI/Hooks/useFetching';
import { usePosts } from '../components/UI/Hooks/usePosts';
import Modalis from '../components/UI/Modal/Modal'
import Loader from '../components/UI/Loader/Loader'
import { useCallback } from 'react/cjs/react.development';
import { useObserver } from '../components/UI/Hooks/useObserver';




function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const SearchedandSortedPosts = usePosts(posts, filter.sort, filter.query)

    const lastElement = useRef()



    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await Postservice.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit)) 
    })

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page+1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])




    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    //Получаем post из дочернего компонента 

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">
            <Buttonis onClick={fetchPosts}>GET</Buttonis>
            <Buttonis style={{ marginTop: 15 }} onClick={() => setModal(true)}>
                Создать
            </Buttonis>
            <Modalis visible={modal} setVisible={setModal}>
                <Postform create={createPost} /></Modalis>

            <hr style={{ margin: '15px' }} />
            <Postfilter
                filter={filter}
                setFilter={setFilter} />
<Selectis
value={limit}
onChange={value => setLimit(value)}
defaultValue="Кол-во элементов"
options={[
    {value:5, name:'5'},
    {value:10, name:'10'},
    {value:-1, name:'All'}
]}/>
            {postError && <h1>Error happened: ${postError}...</h1>}
            <PostList remove={removePost} posts={SearchedandSortedPosts} title='Blocka Posta' />
            <div ref={lastElement} style={{height: 20, background:'red'}}/>
            
            {isPostLoading && 
                 <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loader /></div>}
                
            <Paginator totalPages={totalPages} page={page} changePage={changePage} />




        </div>
    );
}

export default Posts;
