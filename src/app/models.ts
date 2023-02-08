import { Point } from 'fabric/fabric-impl';

export interface CanvasObject {
  aCoords?: { bl: Point; br: Point; tl: Point; tr: Point };
  oCoords?: {
    tl: Point;
    mt: Point;
    tr: Point;
    ml: Point;
    mr: Point;
    bl: Point;
    mb: Point;
    br: Point;
    mtr: Point;
  };
  text?: string;
  blob?: string | ArrayBuffer | null;
  page?: string;
  id: string;
}
