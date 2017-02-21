import { ActionTypes } from '../actions';

const dataReducer = (state = { china: [], dowJones: [], euro: [], fox:[], mexico:[], nasdaq:[], npr:[], nyt:[], pound:[], trump:[], wsj:[] }, action) => {
  switch (action.type) {

    case ActionTypes.FETCH_CHINA:
      return { china: action.payload, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_DOWJONES:
      return { china: state.china, dowJones: action.payload, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_EURO:
      return { china: state.china, dowJones: state.dowJones, euro: action.payload, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_FOX:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:action.payload, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_MEXICO:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:action.payload, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_NASDAQ:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:action.payload, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_NPR:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:action.payload, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_NYT:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:action.payload, pound:state.pound, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_POUND:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:action.payload, trump:state.trump, wsj:state.wsj };
    case ActionTypes.FETCH_TRUMP:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:action.payload, wsj:state.wsj };
    case ActionTypes.FETCH_WSJ:
      return { china: state.china, dowJones: state.dowJones, euro: state.euro, fox:state.fox, mexico:state.mexico, nasdaq:state.nasdaq, npr:state.npr, nyt:state.nyt, pound:state.pound, trump:state.trump, wsj:action.payload };


    default:
      return state;
  }
};

export default dataReducer;
