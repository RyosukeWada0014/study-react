import { useCallback, useEffect, useState } from "react";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = useCallback(async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!res.ok) {
                throw new Error("エラーが発生しました");
            }
            const json = await res.json();
            setPosts(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (loading) {
        return <div>ロード中</div>;
    }

    if (error) {
        <div>{error.message}</div>;
    }

    if (posts.length === 0) {
        <div>データがありません</div>;
    }

    return (
        <ol>
            {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
            })}
        </ol>
    );
};
