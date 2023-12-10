import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, isLoading, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  return { data, isLoading, error };
};
