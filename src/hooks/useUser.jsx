import useSWRImmutable from "swr/immutable";
import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWRImmutable(
    router.query.id
      ? `${API_URL}/users/${router.query.id}`
      : null
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
