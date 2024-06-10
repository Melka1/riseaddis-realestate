import getPayments from "@/hooks/getPayments";
import getRealEstates from "@/hooks/getRealEstates";
import getSites from "@/hooks/getSites";
import getUnits from "@/hooks/getUnits";
import { create } from "zustand";

export const useDashboardStore = create((set) => ({
  realEstates: [],
  realEstate: null,
  realEstateListOptions: [],

  sites: [],
  site: null,
  siteListOptions: [],

  units: [],
  unit: null,

  payment: null,
  payments: [],

  paymentTypes: [],

  updateRealEstates: async () => {
    const realEstates = await getRealEstates();
    set({ realEstates });
  },

  setRealEstates: (realEstates) => {
    set({ realEstates });
  },

  setRealEstate: (realEstate) => {
    set({ realEstate });
  },

  updateUnits: async () => {
    const units = await getUnits();
    set({ units });
  },

  setUnits: (units) => {
    set({ units });
  },

  setUnit: (unit) => {
    set({ unit });
  },

  setSite: (site) => {
    set({ site });
  },

  updateSites: async () => {
    const sites = await getSites();
    set({ sites });
  },

  setSiteListOptions: (siteListOptions) => {
    set({ siteListOptions });
  },

  setSites: (sites) => {
    set({ sites });
  },

  setRealEstateListOptions: (realEstateListOptions) => {
    set({ realEstateListOptions });
  },

  setPayment: (payment) => {
    set({ payment });
  },

  setPayments: (payments) => {
    set({ payments });
  },

  updatePayments: async () => {
    const payments = await getPayments();
    set({ payments });
  },

  setPaymentTypes: (paymentTypes) => {
    set({ paymentTypes });
  },
}));
