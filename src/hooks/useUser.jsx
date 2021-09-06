import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { useRouter } from "next/router";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
