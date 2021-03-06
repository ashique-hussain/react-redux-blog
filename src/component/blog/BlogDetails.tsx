import BlogView from "component/view/BlogView"
import CommentView from "component/view/CommentView";
import { fetchPostByIdAsync, selectPostById, selectStatus } from "features/blog/blogSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import PreLoading from "component/view/PreLoading";
import { fetchCommentsByPostIdAsync, selectComments, selectPostId, selectStatus as commentStatus } from "features/comment/commentSlice";

const BlogDetails = () => {
    const params: { [key: string]: any } = useParams();
    const slug = params.slug;
    const status = useAppSelector(selectStatus);
    const postId = useAppSelector(selectPostId);
    const commentsStatus = useAppSelector(commentStatus);
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
            {(status === 'loading' || commentsStatus === 'loading') && <PreLoading />}
            <Helmet>
                <title>{response?.title}</title>
            </Helmet>
            <div className="container my-3">
                <BlogView title={response?.title} detail={response?.body} />
                <button className="btn btn-primary my-2" onClick={() => dispatch(fetchCommentsByPostIdAsync(slug))}>Load Comments</button>
                {postId === slug && commentResp && commentResp.length > 0 && commentResp.map(comment =>
                    <CommentView name={comment.name} comment={comment.body} id={comment.id} />
                )}
            </div>
        </>
    )
}

export default BlogDetails;