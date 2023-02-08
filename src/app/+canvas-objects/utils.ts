import { fabric } from 'fabric';
import { CanvasObject } from '../models';
import * as CanvasObjectsActions from '../+canvas-objects/canvas-objects.actions';

export const setText = (layer: any, canvas: any, id: any, store: any) => {
  const text = new fabric.Textbox('New text', {
    width: 150,
    data: {
      id: id,
    },
  });
  canvas.add(text);
  const objectToSave: CanvasObject = {
    aCoords: text.aCoords,
    oCoords: text.oCoords,
    page: layer.id,
    text: text.text,
    id: text.data.id,
  };
  store.dispatch(CanvasObjectsActions.addNewObject({ obj: objectToSave }));
};

export const setImage = (
  files: any,
  layer: any,
  canvas: any,
  id: any,
  store: any
) => {
  const fileToUpload = files.target.files[0];
  var url = URL.createObjectURL(fileToUpload);
  const reader = new FileReader();
  reader.readAsDataURL(fileToUpload);
  let imageContainer: any = {
    aCoords: {} as any,
    oCoords: {} as any,
  };
  reader.onload = () => {
    fabric.Image.fromURL(url, (image) => {
      imageContainer = image.set({
        left: 50,
        top: 50,
        data: {
          id: id,
          blob: reader.result,
        },
      });
      canvas.add(image);
      const objectToSave: CanvasObject = {
        aCoords: imageContainer.aCoords,
        oCoords: imageContainer.oCoords,
        page: layer.id,
        blob: reader.result,
        id: id,
      };
      store.dispatch(CanvasObjectsActions.addNewObject({ obj: objectToSave }));
    });
  };
};

export const updateObject = (object: any, store: any, layer: any) => {
  const objectToSave: CanvasObject = {
    aCoords: object.aCoords,
    oCoords: object.oCoords,
    page: layer.id,
    text: object?.text,
    blob: object.data?.blob,
    id: object.data.id,
  };
  store.dispatch(
    CanvasObjectsActions.updateExistingObject({ obj: objectToSave })
  );
};

export const deleteObject = (id: any, store: any, globalId: any) => {
  store.dispatch(CanvasObjectsActions.deleteObject({ id }));
  let currentInnerId = +id.slice(2);
  return {
    layerId: globalId.layerId,
    count: currentInnerId--,
  };
};

export const generateId = (id: any) => {
  let lastId = id.layerId + '-' + id.count++;
  return {
    layerId: id.layerId,
    count: id.count,
    lastId: lastId,
  };
};
