import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="block hover:text-blue-500 group">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <p className="text-lg text-gray-600 group-hover:text-blue-400">
                    {post.body}
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
