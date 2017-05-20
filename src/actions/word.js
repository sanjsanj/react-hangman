export const types = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const actions = {
  fetchRequest() {
    return {
      type: types.REQUEST,
    };
  },
  fetchSuccess(payload) {
    return {
      type: types.SUCCESS,
      payload,
    };
  },
  fetchErro() {
    return {
      type: types.ERROR,
    };
  },
};
