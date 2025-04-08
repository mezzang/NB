import styled from "styled-components";
import PostCard from "./PostCard";

const PostGridWrapper = styled.div`
  position: relative;
  width: 1082px;
  height: 469px;
  background-color: #fffbf0;
  border: 3px solid;
  padding: 20px;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(233px, 1fr));
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

function PostGrid({ posts }) {
  return (
    <PostGridWrapper>
      <Grid>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
      </Grid>
    </PostGridWrapper>
  );
}

export default PostGrid;
// src/components/PostGrid.jsx
