import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      <ol>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`comments/${comment.id}`}>
                <a>{comment.name}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
