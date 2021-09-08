import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl mt-2 text-gray-600">{data?.body}</p>
      <UserByUserId id={data.userId} />
      <h2 className="text-xl font-bold mt-8">コメント一覧</h2>
      <div className='mt-2'>
        <CommentsByPostId id={data.id} />
      </div>
    </div>
  );
};
