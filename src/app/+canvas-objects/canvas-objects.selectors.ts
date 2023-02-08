import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, CANVAS_OBJECTS_FEATURE_KEY } from './canvas-objects.reducer';

export const getCanvasObjectsState = createFeatureSelector<State>(
  CANVAS_OBJECTS_FEATURE_KEY
);

export const getCanvasObjects = createSelector(getCanvasObjectsState, (state) =>
  Object.values(state.entities)
);
