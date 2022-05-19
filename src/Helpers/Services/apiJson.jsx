// import { useAuthContext } from "../../Context";

const encodedToken = localStorage.getItem("authData") ? localStorage.getItem("authData") : '';

export const ApiJson = { 

//ACTION TO LOGIN
actionLogin: {
  url: '/auth/login',
  method: 'POST',
  data: {
    // "email": "",
    "username": "",
    "password": "",
  },
  headers: {
    'Content-Type': 'application/json'
  }, 
  showResultMessage: false,
  showErrorMessage: true,
  },

  //ACTION TO SIGN UP
  actionSignup: {
    url: '/auth/signup',
    method: 'POST',
    data: {
      // "email":'',
      "firstName":'',
      "lastName":'',
      "password":'',
      "username":''
    },
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: true,
    },

  //ACTION TO GET ALL CATEGORY
  getAllCategory: {
      url: '/categories',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        
      }, 
      showResultMessage: false,
      showErrorMessage: false,
  },

  //ACTION TO GET CATEGORY BY ID
  getCategoryById:{
    url: '/categories/:categoryId',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',        
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //ACTION TO GET VIDEOS
  getVideos: {
    url: '/videos',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',        
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //ACTION TO GET VIDEO BY ID
  getVideoById:{
    url: '/video/:videoId',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',        
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //LIKE / DISLIKE 

  //ACTION TO GET LIKED VIDEOS
  getLikedVideos: {
    url: '/user/likes',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //ACTION TO ADD A PARTICULAR VIDEO TO LIKED LIST
  actionAddToLikedVideosList:{
    url: '/user/likes',
      method: 'POST',
      data: {
        video:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

    //ACTION TO DELETE VIDEO FROM LIKED LIST
    actionRemoveFromLikedVideosList:{
      url: 'user/likes/:videoId',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },



  //Playlist Routes -- api
  getplaylists: {
    url: '/user/playlists',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //Action to Create Playlist
  actionCreatePlaylist:{
    url: '/user/playlists',
      method: 'POST',
      data: {
        "playlist":{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
        // 'authorization': getEncodedToken()
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //action to Delete Playlist
  actionDeletePlaylist:{
    url: '/user/playlists/:playlistId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //Action to get Playlist By Id
  getPlaylistById:{
    url: '/user/playlists/:playlistId',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: true,
  },

  //action to AddVideo To Playlist
  actionAddVideoToPlaylist:{
    url: '/user/playlists/:playlistId',
      method: 'POST',
      data: {
        video:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //action to deletes a video from the playlist
  actionToDeleteVideoFromPlaylist:{
    url: '/user/playlists/:playlistId/:videoId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //WATCHLATER..
    getWatchlaterVideos: {
      url: '/user/watchlater',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: false,
    },

    //action to AddVideo To Playlist
    actionAddVideoToWatchlater:{
      url: '/user/watchlater',
        method: 'POST',
        data: {
          video:{}
        },
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //action to deletes a video from the playlist
    actionToDeleteVideoFromWatchlater:{
      url: 'user/watchlater/:videoId',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //HISTORY
    //getHistory
    getHistory: {
      url: '/user/history',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: false,
    },

    //actionAddVideoToHistory
    actionAddVideoToHistory:{
      url: '/user/history',
        method: 'POST',
        data: {
          video:{}
        },
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //action To Delete Video From hISTORY
    actionToDeleteVideoFromHistory:{
      url: 'user/history/:videoId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
    },

    //action to clear all history
    actionToClearAllHistory:{
      url: '/user/history/all',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },
    
}