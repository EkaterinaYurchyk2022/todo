import {AppRootStateType} from "./store";

export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectIsInitialised = (state: AppRootStateType) => state.app.isInitialized