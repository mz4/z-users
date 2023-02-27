import {
  getMeetingsApi,
  postMeetingsApi,
  deleteMeetingsApi,
} from '../../../service/meetings';
import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  meetings: [],
  loading: false,
  filters: {
    sorting: { asc: true },
    parameters: { favorite: false },
  },
};

export const getMeetings = createAsyncThunk('getMeetings', () => {
  return getMeetingsApi();
});

export const searchMeetings = createAsyncThunk(
  'searchMeetings',
  (debouncedSearch) => {
    console.log('debouncedSearch: ', debouncedSearch);
    return getMeetingsApi();
  }
);

export const postMeeting = createAsyncThunk('postMeeting', (data) => {
  postMeetingsApi(data);
  return data;
});

export const deleteMeeting = createAsyncThunk('deleteMeeting', (meetingId) => {
  deleteMeetingsApi(meetingId);
  return meetingId;
});

const meetingsSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    meetingsListSort(state) {
      state.filters.sorting.asc = !state.filters.sorting.asc;
    },
    filterMeetings(state, action) {
      state.filters.parameters.favorite = action.payload.favorite;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMeetings.fulfilled, (state, action) => {
      const search = action.meta.arg;
      const meetings = action.payload;
      return {
        ...state,
        loading: false,
        meetings: meetings.filter((meeting) => {
          const lowerCaseName = meeting.name.toLowerCase();
          const lowerCaseSearch = search.toLowerCase();
          return lowerCaseName.includes(lowerCaseSearch);
        }),
      };
    });
    builder.addCase(searchMeetings.pending, (state) => {
      return {
        ...state,
        loading: true,
        meetings: [],
      };
    });
    builder.addCase(getMeetings.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        meetings: action.payload,
      };
    });
    builder.addCase(getMeetings.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        meetings: [],
      };
    });
    builder.addCase(deleteMeeting.fulfilled, (state, action) => {
      return {
        ...state,
        meetings: state.meetings.filter(
          (meeting) => meeting.id !== action.payload
        ),
      };
    });
    builder.addCase(postMeeting.fulfilled, (state, action) => {
      return {
        ...state,
        meetings: [...state.meetings, JSON.parse(action.payload)],
      };
    });
  },
});

export const { meetingsListSort, filterMeetings } = meetingsSlice.actions;

export default meetingsSlice.reducer;

export const selectGetMeetings = createSelector(
  (state) => state.meetings.meetings,
  (meetings) => {
    return meetings;
  }
);

export const selectLoading = createSelector(
  (state) => state.meetings.loading,
  (loading) => {
    return loading;
  }
);

export const getTotalMeetings = createSelector(
  (state) => state.meetings.meetings,
  (meetings) => {
    return meetings.length;
  }
);

export const getMeetingsFilters = createSelector(
  (state) => state.meetings.filters,
  (filters) => {
    return filters;
  }
);
