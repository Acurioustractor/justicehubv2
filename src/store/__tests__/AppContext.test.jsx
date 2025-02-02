import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AppProvider, useAppState, useAppDispatch } from '../AppContext';
import { setPrograms, selectProgram } from '../actions';

describe('AppContext', () => {
  it('provides initial state', () => {
    const { result } = renderHook(() => useAppState(), {
      wrapper: AppProvider,
    });

    expect(result.current.programs).toEqual([]);
    expect(result.current.selectedProgram).toBeNull();
  });

  it('updates state correctly', () => {
    const { result } = renderHook(
      () => ({
        state: useAppState(),
        dispatch: useAppDispatch(),
      }),
      { wrapper: AppProvider }
    );

    const testProgram = { id: '1', name: 'Test Program' };

    act(() => {
      result.current.dispatch(setPrograms([testProgram]));
    });

    expect(result.current.state.programs).toEqual([testProgram]);

    act(() => {
      result.current.dispatch(selectProgram(testProgram));
    });

    expect(result.current.state.selectedProgram).toEqual(testProgram);
  });
}); 