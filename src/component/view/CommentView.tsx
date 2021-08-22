interface IProps {
    name: string;
    comment: string;
    id?: number;
}

const CommentView = (props: IProps) => {
    const { name, comment, id } = props;
    return (
        <div className="card mt-1" key={id}>
            <div className="card-body">
                <div className="d-flex">
                    <i className="bi bi-person-circle fs-2"></i>
                    <div className="comments mb-0 me-2 ms-2">
                        <span><strong>Name: </strong><span className="text-uppercase">{name}</span></span>
                        <span className="d-block"><strong>Comment: </strong></span>
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentView;