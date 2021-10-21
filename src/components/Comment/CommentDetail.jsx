import Head from "next/head";
import { useRouter } from "next/router";
import { PostTitleByCommentId } from "src/components/Post/PostTitleByCommentId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const CommentDetail = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.body}</title>
      </Head>
      <p className="text-lg">
        {data.name} ({data.email})
      </p>
      <h1 className="font-bold text-3xl">{data.body}</h1>
      <h2 className="font-bold text-lg mt-8">元記事</h2>
      <div className="mt-2">
        <PostTitleByCommentId id={data.postId} />
      </div>
    </div>
  );
};
