import {
  AfterViewInit,
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';
import { CanvasObjectsState } from 'src/app/+canvas-objects/canvas-objects.reducer';
import {
  deleteObject,
  generateId,
  setImage,
  setText,
  updateObject,
} from 'src/app/+canvas-objects/utils';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  canvas!: Canvas;

  @Input()
  layer: any;

  id: any = {
    layerId: null,
    count: 1,
  };
  showError: boolean = false;
  hasControls: boolean = true;

  constructor(private store: Store<CanvasObjectsState>) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.id.layerId = changes['layer'].currentValue.id;
  }

  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas(this.layer.id);
    this.canvas.setHeight(600);
    this.canvas.setWidth(600);
    this.canvas.on('object:modified', (value: any) => {
      updateObject(value.target, this.store, this.layer);
    });
    this.canvas.on('object:removed', (value: any) => {
      const id = value.target.data.id;
      this.id = deleteObject(id, this.store, this.id);
    });
  }

  addText() {
    this.id = generateId(this.id);
    setText(this.layer, this.canvas, this.id.lastId, this.store);
  }

  addImage(files: any) {
    if (files.target.files.length !== 0) {
      this.id = generateId(this.id);
      setImage(files, this.layer, this.canvas, this.id.lastId, this.store);
      files.target.value = '';
    }
  }

  removeObject() {
    this.showError = false;
    const activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.remove(activeObject);
    } else {
      this.showError = true;
    }
  }
}
