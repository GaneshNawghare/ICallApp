import customAxios from './axiosfile'

export const getSosData = async () => {
    return await customAxios.get('/api/sos/getSos');
  };

export const getContentData = async () => {
    return await customAxios.get('/api/content/getContent');
};

export const getSosInData = async ({id}:any) => {
  console.log("apiId",id);
  return await customAxios.get(`/api/sosIn/get-SosParentIn/${id}`);
};

export const getContentInnerData = async ({id}:any) => {
  console.log("apiIdcontent",id);
  return await customAxios.get(`/api/contentIn/get-ContentParentIn/${id}`);
};

export const getContentInData = async () => {
  return await customAxios.get('/api/contentIn/getContentIn');
};