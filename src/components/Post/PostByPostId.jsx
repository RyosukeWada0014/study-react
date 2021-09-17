﻿import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const PostByPostId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a className="text-lg hover:text-blue-600">{data?.title}</a>
    </Link>
  );
};