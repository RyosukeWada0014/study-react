import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const ArticleByPostId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a>{data?.title}</a>
    </Link>
  );
};
