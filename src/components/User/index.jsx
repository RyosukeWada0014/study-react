﻿import Head from "next/head";
import Link from "next/link";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    <div>ロード中です</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.name}</h1>
      <ul>
        <li>{`Username: ${data?.username}`}</li>
        <li>{`Email: ${data?.email}`}</li>
      </ul>
      <button>
        <Link href="/users">
          <a>Back</a>
        </Link>
      </button>
    </div>
  );
};