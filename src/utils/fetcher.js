export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラー発生");
  }

  const json = await response.json();
  return json;
};
