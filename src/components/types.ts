import {Viewport, Action, ID, ReactComponent} from '../types';

export type SnapshotSource = ReactComponent<any, any>;

export interface Descriptor {
  id: ID,
  groups: string[],
  name: string,
  case: string | null,
  action: Action | null,
  element: React.ReactNode,
  record: boolean,
  skip: boolean,
  only: boolean,
  threshold: number,
  viewport: Viewport,
  hasMultipleViewports: boolean,
}
