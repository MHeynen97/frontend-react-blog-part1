import {useParams} from "react-router-dom";

function PostDetail() {
    const {id} = useParams();

    return(
        <div>Details van post {id}</div>
    )
}

export default PostDetail;