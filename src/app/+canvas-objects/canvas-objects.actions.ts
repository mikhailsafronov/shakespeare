import { createAction, props } from '@ngrx/store';
import { CanvasObject } from '../models';

const actionPrefix = '[CANVAS OBJECTS]';

export const addNewObject = createAction(
  `${actionPrefix} Add New Object`,
  props<{ obj: CanvasObject }>()
);

export const updateExistingObject = createAction(
  `${actionPrefix} Update Existing Object`,
  props<{ obj: CanvasObject }>()
);

export const deleteObject = createAction(
  `${actionPrefix} Delete Object`,
  props<{ id: string }>()
);

export const clearStore = createAction(`${actionPrefix} Clear Store`);
