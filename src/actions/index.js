import axios from 'axios';
import googleTrends from 'google-trends-api';
import { browserHistory } from 'react-router';


export const ActionTypes = {

  FETCH_CHINA: 'FETCH_CHINA',
  FETCH_DOWJONES: 'FETCH_DOWJONES',
  FETCH_EURO: 'FETCH_EURO',
  FETCH_FOX: 'FETCH_FOX',
  FETCH_MEXICO: 'FETCH_MEXICO',
  FETCH_NASDAQ: 'FETCH_NASDAQ',
  FETCH_NPR: 'FETCH_NPR',
  FETCH_NYT: 'FETCH_NYT',
  FETCH_POUND: 'FETCH_POUND',
  FETCH_TRUMP: 'FETCH_TRUMP',
  FETCH_WSJ: 'FETCH_WSJ',
  FETCH_GOOGLETRENDS:'FETCH_GOOGLETRENDS',
};





export function fetchGoogleTrends(phrase, date){
  var nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1)

  var prevDay = new Date(date);
  prevDay.setDate(prevDay.getDate() - 1)

  var currentDate = new Date(date);


  return (dispatch) => {
    googleTrends.interestOverTime({keyword: phrase, startTime: prevDay, endTime: nextDate}).then(response => {
      dispatch({type: ActionTypes.FETCH_GOOGLETRENDS, payload: JSON.parse(response)})}).catch(error => {
        console.log(error);
      })
    }
  }




export function fetchchina() {
  return (dispatch) => {
    axios.get("../../data/china_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_CHINA, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchdowjones() {
  return (dispatch) => {
    axios.get("../../data/dowjones_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_DOWJONES, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetcheuro() {
  return (dispatch) => {
    axios.get("../../data/euro_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_EURO, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchfox() {
  return (dispatch) => {
    axios.get("../../data/fox_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_FOX, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchmexico() {
  return (dispatch) => {
    axios.get("../../data/mexico_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_MEXICO, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}
export function fetchnasdaq() {
  return (dispatch) => {
    axios.get("../../data/nasdaq_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_NASDAQ, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchnpr() {
  return (dispatch) => {
    axios.get("../../data/npr_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_NPR, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchnyt() {
  return (dispatch) => {
    axios.get("../../data/nyt_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_NYT, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}
export function fetchpound() {
  return (dispatch) => {
    axios.get("../../data/pound_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_POUND, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}


export function fetchtrump() {
  return (dispatch) => {
    axios.get("../../data/trump_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_TRUMP, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}
export function fetchwsj() {
  return (dispatch) => {
    axios.get("../../data/wsj_current.json").then(response => {
      dispatch({ type: ActionTypes.FETCH_WSJ, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}










export function fetchpost(id) {
// axios get
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}







export function createPost(thePost) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, thePost).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
  // const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  // axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
}


export function updatePost(id, newPost) {
  console.log('FROM ACTIONS: ' + newPost);
  // const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, newPost).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  // axios.put(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
  };
}


export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
    }, browserHistory.push('/')).catch(error => {
      console.log(error);
    });
  };


  // axios.delete(`${ROOT_URL}/posts${API_KEY}`, id).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
}
