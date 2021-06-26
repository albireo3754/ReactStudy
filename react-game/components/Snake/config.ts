export const DIRECTION = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export const key: { [index: string]: number } = {
  up: 0,
  right: 1,
  down: 2,
  left: 3,
};

export enum TDirection {
  'food' = -3,
  'snake' = -2,
  'background' = -1,
  'up' = 0,
  'right' = 1,
  'down' = 2,
  'left' = 3,
}
