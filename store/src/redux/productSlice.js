import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const productFetch = createAsyncThunk(
    'product/productFetch',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://6312695bb466aa9b0389c80a.mockapi.io/pajams');

            if (!response.ok) {
                throw new Error('Server error!')
            }

            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: action.payload.id,
                price: action.payload.price,
                model: action.payload.model,
                color: action.payload.color,
                imageUrl: action.payload.imageUrl,
                completed: false,
            });
        }
    },
    extraReducers: {
        [productFetch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.product = action.payload;
        },
        [productFetch.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const { addTodo } = productSlice.actions;

export default productSlice.reducer