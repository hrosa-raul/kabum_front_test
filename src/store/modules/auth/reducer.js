import produce from 'immer';

const INITITAL_STATE = {
  loading: false,
  user: null
};

export default function auth(state = INITITAL_STATE, action){
  switch (action.type) {
    case '@auth/SIGIN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.user
      })
    default:
      return state;
  }
}