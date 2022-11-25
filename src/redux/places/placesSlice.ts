import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Place } from "../../types/placesTypes"

const initialState: Place[] = []

export const fetchPlaces = createAsyncThunk('fetchPlaces', async () => {
    const responces = await axios.get('https://open-api.myhelsinki.fi/v1/places/?language_filter=en&limit=1')
    return responces.data
})

const places = createSlice({
    name: 'places',
    initialState,
    reducers: {

    },
    extraReducers: (build) => 
        build.addCase(fetchPlaces.fulfilled, (state, action: PayloadAction<Place[]>) => {
            return action.payload
        })
})

export const placesReducer = places.reducer
