import Banner from "../components/Banner";
import CreatePostButton from "../components/CreatePostButton";
import PostGrid from "../components/PostGrid";

function Home() {
  const posts = [
    { title: "첫 번째 글", content: "이건 예시 게시물입니다." },
    { title: "두 번째 글", content: "React는 재밌어요!" },
    // 필요 시 더 추가
  ];

  return (
    <div>
      <Banner />
      <CreatePostButton />
      <PostGrid posts={posts} />
    </div>
  );
}

export default Home;
// src/pages/Home.jsx
