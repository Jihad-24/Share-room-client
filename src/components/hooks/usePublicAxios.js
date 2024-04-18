"use client";

import axios from "axios";
// https://share-room-server.vercel.app/
export const instance = axios.create({
  baseURL: "https://share-room-server.vercel.app",
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
