import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { CATEGORY_URL } from "../../utils/constants"

  export const getCategories = createAsyncThunk('categories/getCategories', async (thunkAPI) => {
    try {
        const res = await axios.get(CATEGORY_URL)
        return res.data.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
  })

  export const addCategory = createAsyncThunk('categories/createCategory', async (category, thunkAPI)=> {
    try {
        const res = await axios.post(CATEGORY_URL, category)
        return res.data.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
  })

export const getCategory = createAsyncThunk('categories/getCategory', async (id, thunkAPI) => {
    try {
        const res = await axios.get(`${CATEGORY_URL}/${id}`)
        return res.data.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
})

export const updateCategory = createAsyncThunk('categories/updateCategory', async (id, thunkAPI) => {
    const data = {}
    try {
        const res = await axios.put(`${CATEGORY_URL}/${id}`, data)
        return res.data.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
})

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id, thunkAPI) => {
    const data = {}
    try {
        const res = await axios.delete(`${CATEGORY_URL}/${id}`, data)
        return res.data.data
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
})

