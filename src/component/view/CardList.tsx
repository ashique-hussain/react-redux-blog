import { Link } from "react-router-dom";

interface IProps {
    id: number;
    title: string;
    body: string;
}

const CardList = (props: IProps) => {
    const { id, title, body } = props;
    return (
        <div className="card my-3">
            <div className="card-body">
                <h2 className="card-title fs-4 text-capitalize">{title}</h2>
                <p className="card-text text-truncate">{body}</p>
                <Link to={'/blog/' + id} className="card-link text-decoration-none">Read More...</Link>
            </div>
        </div>
    )
}

export default CardList;