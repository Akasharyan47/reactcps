import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer"; 
 
const AppContext = React.createContext();
const AnnouncementApi = " ";
 const teacherAPI = "";
const BannerAPI = " ";
// const AnnouncementApi = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/notification-details";
 //  const teacherAPI = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/teachers-detail";
 //const BannerAPI = "https://nsch6pq5cd.execute-api.ap-south-1.amazonaws.com/dev/banner-images";
const intialState = {  
  bannerImages:[],
  notificationDetail:[],
  teachersDetail: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState); 
    

    // teacher api data

const  getTeacher = async (url) => {
  dispatch({type: "SET_LOADING..."});
  try {
    const res  = await fetch(url);
    const data = await res.json(); 
     dispatch( { type: "Teacher_Detail", 
     payload: {
      teachersDetail:data.teachersDetail}
    });  

  } catch (error) {
    
  } 
}; 

useEffect(() => {   
  const timer = setTimeout(() => {
      getTeacher(teacherAPI);
  }, 6000);
  return () => clearTimeout(timer);
    
    // Most recent valuev  
}, []);

// End teacher api data ------



// Annousmant api get 
const  getAnnouncement = async (url) => {
  dispatch( {type: "SET_LOADING..."});
  try {
    const res  = await fetch(url);
    const data = await res.json();
    dispatch({ type: "Announcement_Detail", 
     payload: {
      notificationDetail:data.notificationDetail} 
    });
  } catch (error) {
    // console.log(error);
  }  
}; 

useEffect(() => { 
  const timer = setTimeout(() => {
    getAnnouncement(AnnouncementApi);
}, 2000);
return () => clearTimeout(timer);
  
}, []);

// end annousment api 

// api banner api  
const getbannerImage = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json(); 
   
  dispatch( { type: "BANNER_IMAGES", 
  payload: {
    bannerImages:data.bannerImages}  
 });
};

useEffect(() => {
  getbannerImage(BannerAPI);
}, []);

  return (
   <AppContext.Provider value={{ ...state}}>
    {children} 
  </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
