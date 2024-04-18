/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";



const userReviews = () => {

  const publicAxios = usePublicAxios();
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await publicAxios.get(`/reviews`);
      return res.data;
    },
  });

  return [reviews, refetch];
};

export default userReviews;