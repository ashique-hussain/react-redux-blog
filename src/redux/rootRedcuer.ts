
import blogReducer from '../features/blog/blogSlice';
import commentsReducer from '../features/comment/commentSlice';

const rootReducer = {
    blogPosts: blogReducer,
    postComments: commentsReducer,
}

export default rootReducer;