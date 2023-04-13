import React, { useState } from "react";
import { useGetUserProfile } from "../../hooks/mypage/useGetUserProfile";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import UpdateModalBlackBg from "./UpdateModalBlackBg";
import styled from "styled-components";
import AlarmContainer from "./AlarmContainer";

function UserProfile() {
  const { userProfile } = useGetUserProfile();
  //모달 open 관리
  const [openModal, setOpenModal] = useState(false);

  const updateUserProfileModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <StUserProfileBox fd="column">
        <ProfileImg src={userProfile?.profileImg} alt="userProfileImg" />

        <div>
          <div>닉네임: {userProfile?.nickname}</div>
          <div>한줄 소개: {userProfile?.introduction}</div>
          <UpdateBtn onClick={updateUserProfileModalHandler}>
            수정하기
          </UpdateBtn>
        </div>

        <AlarmContainer />
      </StUserProfileBox>

      {/* 유저 프로필 수정을 위한 모달 open */}
      {openModal && <UpdateUserProfileModal setOpenModal={setOpenModal} />}
      {/* 모달 열림과 동시에 어두운 백그라운드 넣어주고 어두운 부분 클릭시 모달 닫힘 */}
      {openModal && <UpdateModalBlackBg setOpenModal={setOpenModal} />}
    </>
  );
}

export default UserProfile;

const StUserProfileBox = styled.div`
  background-color: pink;
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const UpdateBtn = styled.button`
  width: 100px;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: translate(0%, -50%);
`;
