import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetLikedArtgramInfo = () => {
  const [num, setNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_LIKEDARTGRAMINFO, num],
    queryFn: async () => {
      // console.log(num, "num??");
      const data = await apis_token.get(
        `/mypage/artgram/likes?limit=3&offset=${num}`
      );
      // console.log(data.data, "data");
      return data.data;
    },
  });
  return {
    LikedArtgramInfo: data,
    num,
    setNum,
  };
};

// import { useQuery } from "@tanstack/react-query";
// import { keys } from "../../shared/queryKeys";
// import { apis_token } from "../../api/apis";

// export const useGetLikedArtgramInfo = () => {
//   const { data } = useQuery({
//     queryKey: keys.GET_LIKEDARTGRAMINFO,
//     queryFn: async () => {
//       const data = await apis_token.get(
//         "/mypage/artgram/likes?limit=3&offset=0"
//       );
//       return data.data;
//     },
//   });
//   return {
//     LikedArtgramInfo: data,
//   };
// };
