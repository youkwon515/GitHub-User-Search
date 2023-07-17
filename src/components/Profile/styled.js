import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

export const ProfileImgBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const ProfileDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Follow = styled.p`
  font-size: 10px;
`;

export const Button = styled.button`
  width: 30px;
  height: 15px;
  font-size: 10px;
  font-weight: 700;
  margin-top: 20px;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`;
