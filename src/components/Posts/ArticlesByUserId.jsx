import Link from "next/link";
import { useArticlesByUserId } from "src/hooks/useFetchArray";

export const ArticlesByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useArticlesByUserId(props.id);

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
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/comments/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
