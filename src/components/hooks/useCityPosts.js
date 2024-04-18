"use client"
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useCityPosts = () => {
  const publicAxios = usePublicAxios();
  const { refetch, data: posts = [] } = useQuery({
    queryKey: ["cityposts"],
    queryFn: async () => {
      const res = await publicAxios.get(`/cityposts`);
      return res.data;
    },
  });

  return [posts, refetch];
};

export default useCityPosts;
