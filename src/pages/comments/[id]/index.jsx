import Head from "next/head";
import { Comment } from "src/components/Comment";
import { Header } from "src/components/Header";


const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <Comment />
    </div>
  );
};

export default Comments;
