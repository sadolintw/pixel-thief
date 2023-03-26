import { CoordsType, DirectionType } from "../types";

export const getTargetCoords = ({
  coords,
  direction }: {
    coords: CoordsType,
    direction: DirectionType
  }): CoordsType => {
  switch (direction) {
    case DirectionType.UP:
      return [coords[0], coords[1] - 1];
    case DirectionType.DOWN:
      return [coords[0], coords[1] + 1];
    case DirectionType.LEFT:
      return [coords[0] - 1, coords[1]];
    case DirectionType.RIGHT:
      return [coords[0] + 1, coords[1]];
    default:
      throw Error(`Invalid direction: ${direction}`)
  }
}