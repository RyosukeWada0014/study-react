import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { useRouter } from "next/router";

export const usePost = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return { data, error, isLoading: !data && !error };
};
