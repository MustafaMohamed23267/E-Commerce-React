import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api_url = import.meta.env.VITE_API_URL;

export const loginUser = createAsyncThunk(
  'auth/loginuser',
  async (userData, { rejectWithValue }) => {
    try {
      const LoginResponse = await axios.post(
        `${Api_url}/login`,
        userData
      );

      if (LoginResponse.data.message === "email or password wrong") {
        return rejectWithValue(LoginResponse.data);
      }

      localStorage.setItem("token", LoginResponse.data.token);

      return LoginResponse.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login Failed"
      );
    }
  }
);

export const RegisterUser = createAsyncThunk(
    'auth/registeruser',
    async(RegisterData,rejectWithValue)=>
        {
            try {
                 const RegisterResponse = await axios.post(`${Api_url}/register`,
                RegisterData
            );
            localStorage.setItem("token",RegisterResponse.data.token);
            // localStorage.setItem("user",JSON.stringify(RegisterResponse.data.user));
            return RegisterResponse.data;
            } 
                catch(error){
    console.log(error.response.data);
    return rejectWithValue(error.response.data);
}
            
           
        }
)


export const GetUser  = createAsyncThunk(
    'auth/getuser',
    async ()=>
        {
             
            const getResponse = await axios.get(`${Api_url}/user`,
                {
                    headers:
                    {
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            return getResponse.data;

        }
)



const authSlice = createSlice(
    {
        name:"auth",
        initialState:
        {
            token:localStorage.getItem("token")||null,
            user:{},
            loading:false,
            error:null
        }
        ,
        reducers:
        {
            logout:(state)=>
                {
                    state.user=null;
                    state.token=null;
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }
        },

        
        extraReducers:(builder)=>
            {
                //////////////////    Register  //////////////

                builder.addCase(RegisterUser.pending,(state)=>
                    {
                        state.loading=true;
                        state.error = null;
                    })

                builder.addCase(RegisterUser.fulfilled,(state , action)=>
                    {
                        state.loading = false;
                        state.user = action.payload.user;
                        state.token = action.payload.token;
                    })

                builder.addCase(RegisterUser.rejected,(state,action)=>
                    {
                        state.loading = false;
                        state.error = action.payload; 
                    })

                ////////////////       Login    //////////////

                builder.addCase(loginUser.pending,(state)=>
                    {
                        state.loading = true;
                    })

                builder.addCase(loginUser.fulfilled,(state , action)=>
                    {
                        state.loading = false;
                        state.user = action.payload.user;
                        state.token = action.payload.token;
                    })

                builder.addCase(loginUser.rejected,(state,action)=>
                    {
                        state.loading = false;
                        state.error = action.payload;
                    })

                 ////////////////       Get user    //////////////

                 builder.addCase(GetUser.pending,(state)=>
                    {
                        state.loading =true;
                        state.error = null;

                    })
                
                 builder.addCase(GetUser.fulfilled,(state,action)=>
                    {
                        state.loading = false;
                        //console.log(action.payload);
                        state.user = action.payload;

                    })

                builder.addCase(GetUser.rejected,(state,action)=>
                    {
                        state.loading = false,

                        state.error = action.payload;
                    })

            }

        



    }
)

export const {logout} = authSlice.actions;

export default authSlice.reducer ;