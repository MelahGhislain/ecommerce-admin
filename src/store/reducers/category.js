import { createSlice } from "@reduxjs/toolkit";
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../actions/category";

const initialState = {
    categoryItems: [],
    isLoading: false,
    error: null,
    errorMsg: null
  }

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state, action)=> {
                state.isLoading = true
                state.error = false
                state.errorMsg = null
            })
            .addCase(getCategories.fulfilled, (state, action)=> {
                state.isLoading = false
                state.categoryItems = action.payload
            })
            .addCase(getCategories.rejected, (state, action)=> {
                state.isLoading = false
                state.error = true
                state.errorMsg = action.payload
            })

        builder
            .addCase(getCategory.pending, (state, action)=> {
                state.isLoading = true
                state.error = false
                state.errorMsg = null
            })
            .addCase(getCategory.fulfilled, (state, action)=> {
                state.isLoading = false
                state.categoryItems = action.payload
            })
            .addCase(getCategory.rejected, (state, action)=> {
                state.isLoading = false
                state.error = true
                state.errorMsg = action.payload
            })

        builder
            .addCase(addCategory.pending, (state, action)=> {
                state.isLoading = true
                state.error = false
                state.errorMsg = null
            })
            .addCase(addCategory.fulfilled, (state, action)=> {
                state.isLoading = false
                state.categoryItems = action.payload
            })
            .addCase(addCategory.rejected, (state, action)=> {
                state.isLoading = false
                state.error = true
                state.errorMsg = action.payload
            })

        builder
            .addCase(updateCategory.pending, (state, action)=> {
                state.isLoading = true
                state.error = false
                state.errorMsg = null
            })
            .addCase(updateCategory.fulfilled, (state, action)=> {
                state.isLoading = false
                state.categoryItems = action.payload
            })
            .addCase(updateCategory.rejected, (state, action)=> {
                state.isLoading = false
                state.error = true
                state.errorMsg = action.payload
            })

        builder
            .addCase(deleteCategory.pending, (state, action)=> {
                state.isLoading = true
                state.error = false
                state.errorMsg = null
            })
            .addCase(deleteCategory.fulfilled, (state, action)=> {
                state.isLoading = false
                state.categoryItems = action.payload
            })
            .addCase(deleteCategory.rejected, (state, action)=> {
                state.isLoading = false
                state.error = true
                state.errorMsg = action.payload
            })
            
    }
})


export const selectIsCategoryLoaded = (state) => state.category.isLoading
export const selectCategories = (state) => state.category.categoryItems
export const selectIsError= (state) => state.category.error

export default categorySlice.reducer;
