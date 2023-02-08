import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CanvasComponent } from './components/canvas/canvas.component';

@Directive({
  selector: '[fontZoom]',
})
export class FontZoomDirective {
  fontSize: any = 4;
  fontSizeRem: any = '';
  fontRate: number = 7;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == '-' || event.key == '_') {
      const changes = this.fontSize--;
      this.fontSizeRem = +(this.fontSize + changes) / this.fontRate + 'rem';
    } else if (event.key == '+' || event.key == '=') {
      const changes = this.fontSize++;
      this.fontSizeRem = +(this.fontSize + changes) / this.fontRate + 'rem';
    }
    this.updateFont();
  }

  private updateFont() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      this.fontSizeRem
    );
  }
}

@Directive({
  selector: '[addControls]',
})
export class AddControlsDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private canvasComponent: CanvasComponent
  ) {}

  @HostListener('mouseover', ['$event'])
  mouseover(event: MouseEvent) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '6px 2px 2px #ccc'
    );
    //this.canvasComponent.showControls();
  }
  @HostListener('mouseout', ['$event'])
  mouseout(event: MouseEvent) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
    //this.canvasComponent.hideControls();
  }
}
