/* Framework */
import { DeepReadonly } from 'utility-types';

/* Data */
import { RootState } from '../../../../shared/config/types';
import { AuthState } from '../../../../shared/auth/types';

export interface LayoutState {
    sidbarOpened: boolean;
}
export interface LayoutRootState {
    layoutState: LayoutState;
}
export type LayoutStateType = DeepReadonly<LayoutState>;
export type LayoutRootType = LayoutRootState & RootState & AuthState;
