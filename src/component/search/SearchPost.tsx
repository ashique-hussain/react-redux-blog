import CardList from "component/view/CardList";
import PreLoading from "component/view/PreLoading";
import { fetchPostsAsync, selectBlogPosts } from "features/blog/blogSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchPosts = () => {
    let queryParam = useQuery();
    const response = useAppSelector(selectBlogPosts);
    const dispatch = useAppDispatch();
    const query = queryParam.get('s')?.trim();

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, [dispatch]);

    const filterPosts = response?.blog.filter((post) => {
        const postTitle = post.title?.toLowerCase();
        return postTitle?.includes(query)
    });

    return (
        <div className="container">
            <Helmet>
                <title>Blog Post Search : {query}</title>
            </Helmet>
            {response.status === 'loading' && <PreLoading />}

            {query && (
                <>
                    <div className="mb-2 mt-3">
                        Search filter: <strong>{query}</strong>
                    </div>
                    {filterPosts.length > 0 && filterPosts.map(blog =>
                        <CardList title={blog.title} body={blog.body} id={blog.id} key={blog.id} />
                    )}
                    {filterPosts.length === 0 && <div className="d-flex justify-content-center my-2 fw-bold">No post found</div>}
                </>
            )}
            {!query && (
                <div className='d-flex justify-content-center my-3'>Please type in search box</div>
            )}
        </div>
    )
};

export default SearchPosts;