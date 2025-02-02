import { ACTIONS } from './AppContext';

export const setPrograms = (programs) => ({
  type: ACTIONS.SET_PROGRAMS,
  payload: programs,
});

export const selectProgram = (program) => ({
  type: ACTIONS.SELECT_PROGRAM,
  payload: program,
});

export const updateFilters = (filters) => ({
  type: ACTIONS.UPDATE_FILTERS,
  payload: filters,
});

export const setUIState = (uiState) => ({
  type: ACTIONS.SET_UI_STATE,
  payload: uiState,
});

export const setLoading = (loadingState) => ({
  type: ACTIONS.SET_LOADING,
  payload: loadingState,
});

export const setError = (error) => ({
  type: ACTIONS.SET_ERROR,
  payload: error,
}); 