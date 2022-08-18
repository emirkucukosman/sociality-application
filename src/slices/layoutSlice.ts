import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';

interface LayoutState {
  companyId: number | null;
  collapsibleId: string | null;
  isDrawerOpen: boolean;
}

const initialState: LayoutState = {
  companyId: 1,
  collapsibleId: 'PUBLISH',
  isDrawerOpen: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setCompanyId: (state, action: PayloadAction<number>) => {
      state.companyId = action.payload;
    },
    setCollapsibleId: (state, action: PayloadAction<string | null>) => {
      state.collapsibleId = action.payload;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { setCompanyId, setCollapsibleId, toggleDrawer } = layoutSlice.actions;

export const selectCompanyId = (state: RootState) => state.layout.companyId;
export const selectCollapsibleId = (state: RootState) => state.layout.collapsibleId;
export const selectIsDrawerOpen = (state: RootState) => state.layout.isDrawerOpen;

export default layoutSlice.reducer;
