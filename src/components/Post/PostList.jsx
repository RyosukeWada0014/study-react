import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`);
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
    <ul className='space-y-2'>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className='block hover:text-blue-500 group'>
                <h1 className='text-xl font-bold'>{post.title}</h1>
                <p className='text-lg text-gray-600 group-hover:text-blue-400'>{post.body}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
