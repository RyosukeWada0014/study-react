import { ArticleByPostId } from "src/components/Post/ArticleByPostId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <p className='text-lg'>{data.name} ({data.email})</p>
      <h1 className="font-bold text-3xl">{data.body}</h1>
      <h2 className='font-bold text-lg mt-8'>元記事</h2>
      <div className='mt-2'>
        <ArticleByPostId id={data.postId} />
      </div>
    </div>
  );
};
