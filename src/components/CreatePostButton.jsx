import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 530px;
  height: 106px;
`;

const Button = styled.button`
  position: relative;
  width: 321px;
  height: 86px;
  top: 10px;
  left: 104px;
  background-color: #fff6db;
  border-radius: 18px;
`;

const Text = styled.p`
  position: absolute;
  width: 193px;
  top: 14px;
  left: 71px;
  font-family: "Itim-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 40px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

function CreatePostButton() {
  return (
    <ButtonWrapper>
      <Button>
        <Text>Create Post</Text>
      </Button>
    </ButtonWrapper>
  );
}
export default CreatePostButton;
// Compare this snippet from noticeboard/src/components/CreatePostButton.jsx:
