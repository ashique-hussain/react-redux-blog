interface IProps {
    title: string;
    detail: string;
}

const BlogDetails = (props: IProps) => {
    const { title, detail } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title text-capitalize fs-3">{title}</h2>
                <div className="card-text">{detail}</div>
            </div>
        </div>
    )
}

export default BlogDetails;