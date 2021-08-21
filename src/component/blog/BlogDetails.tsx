import BlogView from "component/view/BlogView"
import CommentView from "component/view/CommentView";
import { fetchPostByIdAsync, selectPostById, selectComments, fetchCommentsByPostIdAsync, selectStatus } from "features/blog/blogSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import PreLoading from "component/view/PreLoading";

const BlogDetails = () => {
    const params: { [key: string]: any } = useParams();
    const slug = params.slug;
    const status = useAppSelector(selectStatus);
    const commentResp: [{
        [key: string]: any;
    }] | undefined = useAppSelector(selectComments);
    const response: { [key: string]: any } | undefined = useAppSelector(selectPostById);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPostByIdAsync(slug));
    }, [dispatch, slug]);

    return (
        <>
            {status === 'loading' && <PreLoading />}
            <Helmet>
                <title>{response?.title}</title>
            </Helmet>
            <div className="container my-3">
                <BlogView title={response?.title} detail={response?.body} />
                <button className="btn btn-primary my-2" onClick={() => dispatch(fetchCommentsByPostIdAsync(slug))}>Load Comments</button>
                {commentResp && commentResp.length > 0 && commentResp.map(comment =>
                    <CommentView name={comment.name} comment={comment.body} key={comment.id} />
                )}
            </div>
        </>
    )
}

export default BlogDetails;