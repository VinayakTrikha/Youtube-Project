import { commentsData } from "../utils/configs";
import Comments from "./Comments";

const CommentsContainer = () => {
  return (
    <div className="ml-2 w-[1100px]">
      {commentsData.map((comment, idx) => <Comments key={idx} data={comment} />)}
    </div>
  )
};

export default CommentsContainer;
