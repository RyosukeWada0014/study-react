import Head from "next/head";
import { ArticlesByUserId } from "src/components/Posts/ArticlesByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ロード中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.name}</h1>
      {data.name ? (
        <div>
          <h2>詳細</h2>
          <ul>
            <li>{`Username: ${data?.username}`}</li>
            <li>{`Email: ${data?.email}`}</li>
          </ul>
        </div>
      ) : null}
      <h2>投稿</h2>
      <ArticlesByUserId id={data.id} />
    </div>
  );
};
