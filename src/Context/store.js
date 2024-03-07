import { create } from "zustand";

const amenityList = [
  "Back yard",
  "Central Air",
  "Chair Accessible",
  "Front yard",
  "Garage Attached",
  "Laundry",
  "A/C System",
  "Gymnasium",
];

export const useStore = create((set) => ({
  user: {},
  searchConditions: {
    type: "",
    bedroom: "",
    bathroom: "",
    moreOptions: false,
    amenities: amenityList.map((amenity) => ({ name: amenity, value: false })),
  },
  setUser: (value) => {
    console.log(value, "store");
    set(() => ({ user: value }));
  },

  setSearchConditions: (type, value) => {
    console.log(value, "search", type);
    switch (type) {
      case "type":
        set((state) => ({
          searchConditions: { ...state.searchConditions, type: value },
        }));
        break;
      case "bedroom":
        set((state) => ({
          searchConditions: { ...state.searchConditions, bedroom: value },
        }));
        break;
      case "bathroom":
        set((state) => ({
          searchConditions: { ...state.searchConditions, bathroom: value },
        }));
        break;
      case "moreOptions":
        set((state) => ({
          searchConditions: {
            ...state.searchConditions,
            moreOptions: !state.searchConditions.moreOptions,
          },
        }));
        break;
      case "amenities":
        set((state) => ({
          searchConditions: {
            ...state.searchConditions,
            amenities: state.searchConditions.amenities.map(
              (amenity, index) => {
                if (value == index) {
                  return { ...amenity, value: !amenity.value };
                }
                return amenity;
              }
            ),
          },
        }));
        break;
      default:
    }
  },
}));
