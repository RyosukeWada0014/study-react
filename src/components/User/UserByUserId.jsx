import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (!data && !error) {
    return <div>ロード中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Create by {data.name}</div>;
};
