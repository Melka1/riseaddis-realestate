import addImagesToGallery from "@/api/addImageToGallery";
import getImagesFromGallery from "@/api/getImagesFromGallery";
import { create } from "zustand";

export const useImageStore = create((set) => ({
  images: [],

  fetchImages: async ({ type }) => {
    const images = await getImagesFromGallery({ type });
    console.log(images, "image store");
    set({ images });
  },

  addImageToGallery: async ({ name, token, imageUrl }) => {
    const image = await addImagesToGallery({ token, imageUrl, name });
    set((state) => ({ images: [...state.images, image] }));
  },
}));
