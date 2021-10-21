import Head from "next/head";
import { useRouter } from "next/router";
import { PostListByUserId } from "src/components/Post/PostListByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ロード中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1 className="font-bold text-3xl">{data.name}</h1>
      <h2 className="text-xl font-bold mt-8">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-lg">
        <li>アカウント名: {data.username}</li>
        <li>メール: {data.email}</li>
        <li>住所: {data.address.city}</li>
        <li>電話番号: {data.phone}</li>
        <li>Webサイト: {data.website}</li>
        <li>勤務先: {data.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold mt-8">投稿</h2>
      <div className="mt-2">
        <PostListByUserId id={data.id} />
      </div>
    </div>
  );
};
