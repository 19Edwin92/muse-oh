import { useRecoilState, useRecoilValue } from "recoil";
import { keys } from "../../shared/queryKeys";
import { searchDataState, searchWordState } from "./seartStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { useEffect } from "react";
import { headerStatedefalut } from "../../components/headerStore";

export const useUnifiedSearch = () => {
  const searchWord = useRecoilValue(searchWordState);
  const queryClient = useQueryClient();
  const [, setData] = useRecoilState(searchDataState);
  const [headerState, setHeaderState] = useRecoilState(headerStatedefalut)

  useEffect(()=> {
    setHeaderState({...headerState, 
      home:false, 
      exhibition:false,
      artgram:false,
      mypages:false})
  },[])

  useEffect(() => {
    console.log("1 실행순서 - useEffect");
    queryClient.invalidateQueries([keys.GET_UNIFIEDSEARCH, searchWord]);
  }, [searchWord]);

  const { isLoading, isError } = useQuery({
    queryKey: [keys.GET_UNIFIEDSEARCH, searchWord],
    queryFn: async () => {
      console.log("2 실행순서 - useQuery");
      // console.log(`/search?searchText=${searchWord}`);
      const response = await apis.get(`/search?searchText=${searchWord}`, {
        headers: {
          Authorization: `Bearer`,
        },
      });
      console.log("useQuery 결과 =========", response.data.search);
      return response.data.search;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: (data) => {
      setData(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  return { isLoading, isError };
};
