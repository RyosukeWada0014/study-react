import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
      <ul className='space-y-2'>
        {data.map((comment) => {
          return (
            <li key={comment.id} className='border-b pb-2'>
              <Link href={`/comments/${comment.id}`}>
                <a className='block text-gray-600 hover:text-blue-600'>{comment.body}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
