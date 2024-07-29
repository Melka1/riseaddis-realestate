import { create } from "zustand";
import getSiteAmenities from "@/api/getAmenities";
import getArticles from "@/api/getArticles";
import getPayments from "@/api/getPayments";
import getRealEstates from "@/api/getRealEstates";
import getSites from "@/api/getSites";
import getSitesOverview from "@/api/getSitesOverview";
import getUnits from "@/api/getUnits";
import getUsers from "@/api/getUsers";

export const useDashboardStore = create((set, get) => ({
  realEstates: [],
  realEstate: null,
  realEstateListOptions: [],
  realEstatesOverview: [],

  sites: [],
  site: null,
  siteListOptions: [],
  sitesOverview: [],

  units: [],
  unit: null,
  unitsOverview: [],

  payment: null,
  payments: [],

  paymentTypes: [],

  article: null,
  articles: [],

  siteAmenities: [],

  siteListOptions: [],

  realEstateListOptions: [],

  chosenSiteFilter: null,

  chosenRealEstateFilter: null,

  updateRealEstates: async ({ token }) => {
    const realEstates = await getRealEstates({ token });
    set({ realEstates });
  },

  setRealEstates: (realEstates) => {
    set({ realEstates });
  },

  setRealEstate: (realEstate) => {
    set({ realEstate });
  },

  setRealEstatesOverview: (realEstates) => {
    set({ realEstatesOverview: realEstates });
  },

  setRealEstateListOptions: (realEstateListOptions) => {
    set({ realEstateListOptions });
  },

  updateUnits: async ({ token }) => {
    const units = await getUnits({ token });
    set({ units });
  },

  setUnits: (units) => {
    set({ units });
  },

  setUnit: (unit) => {
    set({ unit });
  },

  setUnitsOverview: (units) => {
    set({ unitsOverview: units });
  },

  setSite: (site) => {
    set({ site });
  },

  updateSites: async ({ token }) => {
    const sites = await getSites({ token });
    set({ sites });
  },

  setSiteListOptions: (siteListOptions) => {
    set({ siteListOptions });
  },

  setSites: (sites) => {
    set({ sites });
  },

  updateSitesOverview: async ({ token }) => {
    const sites = await getSitesOverview({ token });
    set({ sitesOverview: sites });
  },

  setSitesOverview: (sites) => {
    set({ sitesOverview: sites });
  },

  setPayment: (payment) => {
    set({ payment });
  },

  setPayments: (payments) => {
    set({ payments });
  },

  updatePayments: async ({ token }) => {
    const payments = await getPayments({ token });
    set({ payments });
  },

  setPaymentTypes: (paymentTypes) => {
    set({ paymentTypes });
  },

  setArticle: (article) => {
    set({ article });
  },

  setArticles: (articles) => {
    set({ articles });
  },

  updateArticles: async ({ token }) => {
    const articles = await getArticles({ token });
    set({ articles });
  },

  setArticleTypes: (articleTypes) => {
    set({ articleTypes });
  },

  setSiteAmenities: (siteAmenities) => {
    set({ siteAmenities });
  },

  updateSiteAmenities: async ({ token }) => {
    const siteAmenities = await getSiteAmenities({ token });
    set({ siteAmenities });
  },

  setSiteListOptions: (siteListOptions) => {
    set({ siteListOptions });
  },

  setRealEstateListOptions: (realEstateListOptions) => {
    set({ realEstateListOptions });
  },

  setChosenSiteFilter: (chosenSiteFilter) => {
    set({ chosenSiteFilter });
  },

  setChosenRealEstateFilter: (chosenRealEstateFilter) => {
    set({ chosenRealEstateFilter });
  },

  user: null,

  users: [],

  setUser: (user) => {
    set({ user });
  },

  setUsers: (users) => {
    set({ users });
  },

  updateUsers: async ({ token }) => {
    const users = await getUsers({ token });
    set({ users });
  },
}));
