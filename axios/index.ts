import customAxios from './axiosfile'

export const getSosData =  () =>  customAxios.get('/api/sos/getSos');

export const getContentData =  () =>customAxios.get('/api/content/getContent');

export const getSosInData =  (id:any) => customAxios.get(`/api/sosIn/get-SosParentIn/${id}`);

export const getContentInnerData =  (id:any) => customAxios.get(`/api/contentIn/get-ContentParentIn/${id}`);

export const getContentInData =  () => customAxios.get('/api/contentIn/getContentIn');

export const getContentInOneData =  (id:any) => customAxios.get(`/api/contentIn/get-ContentIn/${id}`);

export const getSosInOneData =  (id:any) => customAxios.get(`/api/sosIn/get-SosIn/${id}`);