import React from 'react'
import Header from '../components/Header'
import { Article } from '../shared/GlobalStyled'
import * as US from '../features/unfiedSearch/unfiedSearch'
import { useNavigate } from 'react-router-dom'
import * as Artgramparts from '../features/artgram/css/ArtgramCss'
// import { useUnifiedSearch } from '../hooks/search/useUnifiedSearch'
import { useUnifiedSearch } from '../hooks/search/useUnifiedSearch'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchDataArtState, searchDataExState, searchDataState, searchDataUserState, searchWordState } from '../hooks/search/seartStore'
import TopButton from '../components/TopButton'
import { useEditTime } from '../hooks/main/useEditTime'
import { headerStatedefalut } from '../components/headerStore'
// import ArtgramBox from '../features/artgram/ArtgramBox'

function UnifiedSearch() {
  const navigate = useNavigate()
  const {editTimehandle} = useEditTime()
  const { isLoading, isError } = useUnifiedSearch();
  const [headerState, setHeaderState] = useRecoilState(headerStatedefalut)
  const searchDataEx = useRecoilValue(searchDataExState)
  const searchDataArt = useRecoilValue(searchDataArtState)
  const searchDataUser = useRecoilValue(searchDataUserState)
  // console.log("searchDataEx", searchDataEx);
  // console.log("searchDataArt", searchDataArt);
  // console.log("searchDataUser", searchDataUser);
  const navigateEx = (detailRouter)=>{
    setHeaderState({...headerState, home:false, exhibition:true, artgram:false, mypages:false})
    navigate(detailRouter)
  }

  return (
    <>
    <Header/>
    <Article>
      <US.Layout>
        <US.H1>통합검색 <span>Unified search</span></US.H1>
        <US.SearchNav>
          <US.SearchNavSection onClick={()=>navigate('/search')} children="통합"/>
          <US.SearchNavOther onClick={()=>navigate('/search/exhibition')} children="전시"/>
          <US.SearchNavOther onClick={()=>navigate('/search/art')} children="아트그램"/>
          <US.SearchNavOther onClick={()=>navigate('/search/users')} children="회원검색"/>
        </US.SearchNav>
        { isLoading || isError 
        ? (<div>로딩 중... </div>)
        : searchDataEx === undefined || searchDataArt === undefined || searchDataUser === undefined
        ? (
          <>
          <US.H2 children={(<>전시</>)}/>
          <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
          <US.H2 children={(<>아트그램</>)}/>
          <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
          <US.H2 children={(<>회원검색</>)}/>
          <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
          </>
        )
        : (<>
          <US.H2 children={(<>전시<span>{searchDataEx.length === 0 ? null : searchDataEx.length}</span></>)}/>
          {searchDataEx && searchDataEx?.length === 0
            ? <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
            : (<US.SearchBoxEx>
              {searchDataEx?.map(({exhibitionId,detailRouter,postImage,exhibitionTitle,startDate,location}) => (
              <US.SearchEx key={exhibitionId} onClick={()=>navigateEx(detailRouter)}>
              <US.SearchBoxExImg src={postImage} alt=''/>
              <US.SearchBoxExTitle children={exhibitionTitle}/>
              <US.SearchBoxExDate children={editTimehandle(startDate)}/>
              <US.SearchBoxExlocation children={location.split(" ").slice(0,3).join(" ")}/>
            </US.SearchEx>))}
            </US.SearchBoxEx>
              )}
          <US.H2 children={(<>아트그램<span>{searchDataArt && searchDataArt?.length === 0 ? null : searchDataArt.length}</span></>)}/>
          {searchDataArt && searchDataArt?.length === 0
            ? <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
            : <Artgramparts.Wrap style={{minHeight:"144px", backgroundColor:"lightcoral", padding:"23px"}}>
              {searchDataArt.map(artgram => (<div key={artgram.artgramId} style={{backgroundColor:"white", height:"426px"}}>{artgram.artgramTitle}</div>))}
              </Artgramparts.Wrap>}
          <US.H2 children={(<>회원검색<span>{searchDataUser && searchDataUser?.length === 0 ? null : searchDataUser.length}</span></>)}/>
          {searchDataUser && searchDataUser?.length === 0
            ? <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
            : <div>서비스 예정</div>}      
          </>)}
        <TopButton/>
      </US.Layout>  
    </Article>
    </>
  )
}

export default UnifiedSearch