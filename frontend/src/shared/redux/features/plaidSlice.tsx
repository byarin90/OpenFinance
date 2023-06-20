import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchLinkToken } from "../../services/serviceAuth";



export const getLinkToken: any= createAsyncThunk(
  "plaid/getLinkToken",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchLinkToken();
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export interface IPlaid {
  link_token: string | null;
  loading: boolean;
  session?:boolean | null | undefined | string;
  error: string | null; // Added error field
}

const initialState:IPlaid = {
  link_token:localStorage.getItem('link_token') || null,
  loading: false,
  session:localStorage.getItem('session') || null ,
  error: null, // Initialize error as null
};

const plaidSlice = createSlice({
  name: "plaid",
  initialState,
  reducers: {
    // Added a simple reducer to reset the error state to null
    setSession: (state, action: PayloadAction<boolean | null | undefined | string>) => {
      state.session = action.payload as boolean | null | undefined | string;
      if(action.payload)
      localStorage.setItem('session', action.payload as string)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getLinkToken.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error state when a new request is made
      })
      .addCase(getLinkToken.fulfilled, (state, action: PayloadAction<any>) => { // Updated typing for action
        localStorage.clear()
        state.link_token = action.payload.link_token;
        localStorage.setItem('link_token', action.payload.link_token);
        state.loading = false;
      })
      .addCase(getLinkToken.rejected, (state, action: PayloadAction<any>) => { // Updated typing for action
        state.loading = false;
        state.error = action.payload || 'Unexpected Error'; // Update error state if a rejection happens
      });
  }
});
export const { setSession } = plaidSlice.actions;
export default plaidSlice.reducer;
