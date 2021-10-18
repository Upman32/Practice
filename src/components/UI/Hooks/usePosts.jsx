import React, { useMemo } from 'react'

const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])


    return sortedPosts
}
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const SearchedandSortedPosts = useMemo(() => {
        return sortedPosts.filter(body => body.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return SearchedandSortedPosts
}