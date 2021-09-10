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
      <div className='mt-2'>
        <ArticlesByUserId id={data.id} />
      </div>
    </div>
  );
};
