import React from 'react'
import { useParams } from 'react-router-dom'

const data = {
  oranc: {
    name: '오란씨',
    description: '리액트를 좋아하는 개발자',
    ho: 'aaa'
  },
  gildong: {
    name: '홍길동',
    description: '동에번쩍 서에번쩍!'
  }
}

const Profile = () => {
  const params = useParams();
  console.log('Profile : ', params);

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      { profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p>{profile.ho}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  )
}

export default Profile