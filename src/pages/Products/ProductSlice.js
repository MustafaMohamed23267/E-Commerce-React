import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api_url = import.meta.env.VITE_API_URL;
export const GetProducts = createAsyncThunk(
    "products/GetProducts",
    async (_,{rejectWithValue})=>
        {
            try {
                  const GetResponse =await axios.get(`${Api_url}/products`,
                {
                    headers:
                    {
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })

                return GetResponse.data;
            } catch (error) {
                return rejectWithValue(error.response?.data?.message||"error at fetch product") ;
            }
          
        }
)


export const AddProduct = createAsyncThunk(
    "products/AddProducts",
    async (ProductsData ,{ rejectWithValue})=>
        {
            try {
                 const AddResponse =await axios.post(`${Api_url}/products`,
                ProductsData,
                {
                    headers:
                    {
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })

            return AddResponse.data;
            } catch (error) {
                return rejectWithValue(
                    error.response?.data?.message ||"error at adding product"
                )
            }
           
        }
)


export const UpdateProduct = createAsyncThunk(
    "products/UpdateProducts",
    async ({UpdateData,id} ,{ rejectWithValue})=>
        {
            try {
                 const UpdateResponse = await axios.put(`${Api_url}/products/${id}`,
                UpdateData,
                {
                    headers:
                    {
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })

            return UpdateResponse.data;
            } catch (error) {
                return rejectWithValue(
                    error.response?.data?.message || "error at updating data"
                )
            }
           
        }
)



export const DeleteProduct = createAsyncThunk(
    "products/DeleteProduct",
    async (id , {rejectWithValue})=>
        {
            try {
                 const DeleteResponse =await axios.delete(`${Api_url}/products/${id}`,
                
                {
                    headers:
                    {
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })

            return DeleteResponse.data;
            } catch (error) {
             return rejectWithValue(
                error.response?.data?.message ||"error at deleting product"
             )   
            }
           
        }
)



const ProductsSlice = createSlice(
    {
        name:"products",
        initialState:
        {
            token:localStorage.getItem("token")||null,
            product:{},
            loading:false,
            error:null
        },
        reducers:[],
        extraReducers:(builder)=>
            {
                //          Get products        //

                builder.addCase(GetProducts.pending,(state)=>
                    {
                        state.loading =true;
                        state.error = null
                    })

                builder.addCase(GetProducts.fulfilled , (state , action)=>
                    {
                        state.loading = false;
                        state.product = action.payload.product;
                        state.token = action.payload.token;
                    })

                builder.addCase(GetProducts.rejected , (state , action)=>
                    {
                        state.loading = false;
                        state.error = action.payload;
                    })

                //          add products        //

                builder.addCase(AddProduct.pending,(state)=>
                    {
                        state.loading = true;
                        state.error = null;
                    })

                builder.addCase(AddProduct.fulfilled,(state,action)=>
                    {
                        state.loading = false;
                        state.product = action.payload.product;
                        state.token = action.payload.token;
                    })

                builder.addCase(AddProduct.rejected , (state , action)=>
                    {
                        state.loading = false; 
                        state.error = action.payload;
                    })

                    //          update products        //

                builder.addCase(UpdateProduct.pending , (state)=>
                    {
                        state.loading= true;
                        state.error = null ;
                    })

                builder.addCase(UpdateProduct.fulfilled , (state,action )=>
                    {
                        state.loading= false;
                        state.product = action.payload.product;
                        state.token = action.payload.token;
                    })

                builder.addCase(UpdateProduct.rejected , (state,action)=>
                    {
                        state.loading = false;
                        state.error = action.payload;
                    })

                //          Delete products        //

                 builder.addCase(DeleteProduct.pending , (state)=>
                    {
                        state.loading= true;
                        state.error = null ;
                    })

                builder.addCase(DeleteProduct.fulfilled , (state,action )=>
                    {
                        state.loading= false;
                        state.product = action.payload.product;
                        state.token = action.payload.token;
                    })

                builder.addCase(DeleteProduct.rejected , (state,action)=>
                    {
                        state.loading = false;
                        state.error = action.payload;
                    })

            }
    })

    export default ProductsSlice.reducer;