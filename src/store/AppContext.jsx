import React, { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

// Initial state
const initialState = {
  programs: [],
  selectedProgram: null,
  filters: {
    type: 'all',
    region: 'all',
  },
  ui: {
    isMapFullscreen: false,
    activeView: 'map',
    sidebarOpen: true,
  },
  loading: {
    programs: false,
    map: false,
  },
  error: null,
};

// Action types
export const ACTIONS = {
  SET_PROGRAMS: 'SET_PROGRAMS',
  SELECT_PROGRAM: 'SELECT_PROGRAM',
  UPDATE_FILTERS: 'UPDATE_FILTERS',
  SET_UI_STATE: 'SET_UI_STATE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PROGRAMS:
      return { ...state, programs: action.payload };
    case ACTIONS.SELECT_PROGRAM:
      return { ...state, selectedProgram: action.payload };
    case ACTIONS.UPDATE_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case ACTIONS.SET_UI_STATE:
      return { ...state, ui: { ...state.ui, ...action.payload } };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: { ...state.loading, ...action.payload } };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// Custom hooks
export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
} 