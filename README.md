## 백승호: 전시페이지

- ✅전시회 페이지 레이아웃 기초 틀 작성(완료.)
- ✅전시회 페이지 레이아웃 2차 수정(완료.)
- ✅전시회 페이지 무한 스크롤 기능구현(1차 기능구현 완료)
- ✅전시회 상세 페이지 레이아운 초기구성 (완료)
- ✅전시회 상세 페이지 레이아운 작성 (완료.)
- ✅전시회 작성 페이지 카카오 주소 api 기능구현 (완료.)
- ✅전시회 작성 페이지 서버로 값보내기, 이미지 넣기 기능구현 (완료.)
- ✅전시회 상세 페이지 값 받아오기, 받아온값 간단하게 page에 보여주기 (완료.)
- ✅전시회 상세페이지 에서 넘어가는 수정 페이지에 값 받아오기, 수정기능 구현 (완료.)
- ✅전시회 create, update 페이지 컴포넌트 분리, 코드 정리 (완료.)
- ✅전시회 create, update 페이지 컴포넌트 분리, 코드 정리 (완료.)
- ✅전시회 작성 페이지 유효성 검사 진행, input추가. (완료.)
- ✅전시회 상세 페이지에서 후기작성 (완료.)
- ✅전시회 상세 페이지에서 좋아요, 스크랩 (완료.)
- ✅전시회 작성, 수정 컴포넌트 재활용 리팩토링 (완료.)
- ✅전시회 리스트 무한스크롤 리팩토링 , 후기 작성폼 리팩토링 (완료.)
- ✅전시회 리스트 tag,search 기능구현, style (완료.)
- ✅전시회 검색when기능구현,detail page 별점기능 불러오기, style (완료.)
- ✅전시회 list+detail 페이지 css그리고 컴포넌트 분리 리팩토링 (진행중.)

## 박영찬: 아트그램 페이지, 메인페이지, 검색페이지, 전시페이지(캘린더)

### 아트그램

      - 아트그램, 상세모달페이지, 아트그램 생성페이지 기초 레이아웃 생성
      - 아트그램 GET,POST,DELETE 기능구현(UPDATE는 디자인 시안이 확정되지 않았음)
      - 아트그램 댓글 GET,POST,DELETE,UPDATE 기능구현
      - 아트그램 대댓글 GET,POST,DELETE 기능구현(UPDATE는 적용할지 논의 중)
      - 아트그램, 댓글, 대댓글이 각각의 상황에서만 각각의 요소를 서버에 요청하도록 기능과 로직 분리
      - 아트그램 상세모달페이지, 복수의 이미지에 대해서 슬라이더 적용
      - (2-3주차) 아트그램, 상세모달페이지 디자인 시안 변경에 따른 디자인 적용
      - (3주차) 아트그램 등록 페이지 디자인 시안에 따른 디자인 적용
      - (4주차) 아트그램 UPDATE 기능구현(이미지 삭제 가능), 이미지 추가입력은 구현 중...

### 메인페이지

      - 메인페이지, 5개의 article에 대한 각각의 GET 요청 기능구현
      - 메인페이지, 5개의 article에 대한 각각의 react-slick 적용
      - 메인페이지, 아트그램 상세모달페이지 연결 및, 기능구현 연결 확인
      - 메인페이지, 최종 디자인 시안에 따른 디자인 적용, 미디어쿼리(1920px, 1440px)

### 통합검색페이지

      - 통합검색을 위한 사용자의 입력값(Input)에 대한 상태관리 도입(리코일)
      - 사용자의 입력값(Input)에 대한 서버통신(POST 아니고, GET 방식으로 통신)
      - 서버통신의 결과에 대한 filter 적용(리코일, selector - 전시, 아트그램, 유저)
      - 통합검색 기초레이아웃 설정
      - 통합검색 디자인 가이드에 따른 레이아웃 적용
      - 검색결과가 없을 때, 새로고침시의 화면 렌더링에 대한 에러 대응
      - 통합검색과 전시상세페이지 연결
      - 통합검색과 아트그램 상세모달 연결
      - 카테고리별 조회(전시, 아트그램)에 대한 각각의 페이지에 대한 설정
      - 검색에 따른 헤더위치에 대한 초기화 선언(헤더의 중앙상태값 변경)
      - 헤더 input.focus() 인기검색어 불러오기 성공 및, 설정 슬라이드div 생성
      - 인기검색어 불러오기 클릭시 해당 검색이 이뤄지도록 실행
      - 회원별 최근 검색기록을 서버로 전달하기 및, 불러오기 서버통신 연결
      -

### 전체페이지

      - 헤더가 참조하는 라우터에 대한 헤더디자인 적용을 위해 상태에 대한 값제어(useEffect)
      - 헤더부분 로그인/비로그인 시의 구분설정

### 전시페이지(캘린더)

      - 전시페이지 검색기능, 캘린더 구현, 탐색가능 기간 모든 날짜(day.js)

## 김재란: 로그인,마이 페이지

- 회원가입 레이아웃 브랜치 생성(와이어프레임 잡은 후 삭제)
- 회원가입 기능구현 브랜치 생성(완료 후 삭제)
- 로그인 레이아웃, 기능구현 브랜치 생성
  - features/8-login-layout-function 브랜치에서 로그인 레이아웃 작업
  - 해당 브랜치에서 로그인 스타일 작업
  - 비밀번호 보이기/숨김 기능
  - 리프레시 토큰 작업
  - 소셜로그인 테스트
- 회원가입 유효성검사 브랜치 생성(유효성검사 구현 완료, 허점 발견하면 브랜치 재사용 예정)
  - features/14-register-validation 브랜치에서 회원가입 레이아웃 작업
  - 해당 브랜치에서 회원가입 스타일 작업
  - 타이머 기능 추가
- 로그인 유효성검사 브랜치 생성(완료 후 삭제, 허점 발견하면 브랜치 재사용 예정)
- 마이페이지 프로필 조회, 수정 기능 구현 브랜치 생성(완료, 프로필에 기능 추가시 브랜치 재사용 예정)
  - 해당 features/29-mypage-function 브랜치에서 프로필 수정 모달 레이아웃 작업
- 회원가입 이메일인증 브랜치 생성(완료 후 삭제)
- 마이페이지 전시,아트그램 컴포넌트 탭메뉴 구현 브랜치 생성(완료 후 삭제)
- 마이페이지 전시,아트그램 데이터 Get요청을 위한 브랜치 생성
  - features/29-mypage-function 브랜치에서 마이페이지 레이아웃 작업
  - 해당 브랜치에서 탭메뉴별(좋아요,스크랩,내글) 갯수 출력 작업
  - 해당 브랜치에서 페이지네이션 작업
  - 해당 브랜치에서 스타일 작업
  - 해당 브랜치에서 알림 기능 작업
  - 해당 브랜치에서 작가 인증 작업
- 회원가입, 로그인, 마이페이지 스타일 작업 브랜치 생성
  - alert 라이브러리 설치 및 사용
