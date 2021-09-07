﻿import { ArticleByPostId } from "src/components/Post/ArticleByPostId";
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
      <h1>{data?.name}</h1>
      <p>{`Email: ${data?.email}`}</p>
      <p>{`Comment: ${data?.body}`}</p>
      <h2>元記事</h2>
      <ArticleByPostId id={data.postId} />
    </div>
  );
};
