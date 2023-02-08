import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as CanvasObjectsActions from './canvas-objects.actions';

export const CANVAS_OBJECTS_FEATURE_KEY = 'CanvasObjects';

export const adapter: EntityAdapter<ObjectEntity> =
  createEntityAdapter<ObjectEntity>({});

export interface ObjectEntity {}

export type State = EntityState<ObjectEntity>;

export interface CanvasObjectsState {
  readonly [CANVAS_OBJECTS_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState();

const canvasObjectsReducer = createReducer(
  initialState,
  on(CanvasObjectsActions.addNewObject, (state, { obj }) => {
    return adapter.addOne(
      {
        id: obj.id,
        data: obj,
      },
      state
    );
  }),
  on(CanvasObjectsActions.updateExistingObject, (state, { obj }) => {
    return adapter.upsertOne(
      {
        id: obj.id,
        data: obj,
      },
      state
    );
  }),
  on(CanvasObjectsActions.deleteObject, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(CanvasObjectsActions.clearStore, (state) => {
    return adapter.removeAll(state);
  })
);

export function reducer(state: State | undefined, action: Action): State {
  return canvasObjectsReducer(state, action);
}
