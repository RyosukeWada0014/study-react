import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データがありません</div>;
  }

  return (
    <div>
      <ul className="space-y-2">
        {data.map((comment) => {
          return (
            <li key={comment.id} className="border-b pb-2">
              <Link href={`/comments/${comment.id}`}>
                <a className="block text-gray-600 hover:text-blue-600">
                  {comment.body}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
