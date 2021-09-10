import useSWR from "swr";
import { useRouter } from "next/router";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
