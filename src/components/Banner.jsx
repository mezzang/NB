import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  width: 1512px;
  height: 358px;
  background-color: #fbefc8;
`;

const Title = styled.h1`
  position: absolute;
  width: 437px;
  top: 122px;
  left: 538px;
  font-family: "Island Moments-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 100px;
  letter-spacing: 0;
  line-height: normal;
`;

function Banner() {
  return (
    <BannerWrapper>
      <Title>Notice Board</Title>
    </BannerWrapper>
  );
}
export default Banner;
// noticeboard/src/components/Banner.jsx:
