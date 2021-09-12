import useSWRImmutable from "swr/immutable";
import { useRouter } from "next/router";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWRImmutable(
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
