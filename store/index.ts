import { searchData } from "@/services/getPosts";
import { getData } from "@/services/getPosts";
import { create } from "zustand";

type UsePosts = {
  posts: Post[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};
export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getData();
    set({ posts, loading: false });
  },
  getPostsBySearch: async (value) => {
    set({ loading: true });
    const posts = await searchData(value);
    set({ posts, loading: false });
  },
}));
