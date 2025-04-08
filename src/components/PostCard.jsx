import styled from "styled-components";

const Card = styled.div`
  width: 233px;
  height: 193px;
  background-color: #ffffff;
  border-radius: 13px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 49px;
  background-color: #d1d1d1bd;
  border-radius: 0 0 13px 13px;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleBox = styled.div`
  font-family: "Itim-Regular", Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #000;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentBox = styled.div`
  font-family: "Itim-Regular", Helvetica, sans-serif;
  font-size: 6px;
  font-weight: 400;
  color: #000;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: calc(1.2em * 2);
`;

function PostCard({ title, content }) {
  return (
    <Card>
      {/* 위에 이미지 넣고 싶으면 여기에 추가 */}
      <Footer>
        <TextBox>
          <TitleBox>{title}</TitleBox>
          <ContentBox>{content}</ContentBox>
        </TextBox>
      </Footer>
    </Card>
  );
}

export default PostCard;
// Compare this snippet from noticeboard/src/components/PostCard.jsx:
