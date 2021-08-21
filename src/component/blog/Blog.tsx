import CardList from 'component/view/CardList';
import PreLoading from 'component/view/PreLoading';
import { fetchPostsAsync, selectBlogPosts } from 'features/blog/blogSlice';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useAppSelector, useAppDispatch } from 'redux/hooks';

const Blog = () => {
    const response = useAppSelector(selectBlogPosts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, [dispatch]);
    return (
        <>
            <Helmet>
                <title>React - Blog lists</title>
            </Helmet>
            {response.status === 'loading' && <PreLoading />}
            <div className="container">
                {response.blog.length > 0 && response.blog.map(blog =>
                    <CardList title={blog.title} body={blog.body} id={blog.id} key={blog.id} />
                )}
            </div>
        </>
    )
}

export default Blog;