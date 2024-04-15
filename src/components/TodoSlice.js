import {createSlice} from "@reduxjs/toolkit"

const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        deleteTodo(state, action) {
           return state.filter(todo => todo.id !== action.payload);
        },
        completedTodo(state, action) {
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo, completed: true
                    }
                }
                return todo;
            })
        }
    }
});


export const {addTodo, deleteTodo, completedTodo} = todoSlice.actions;

export default todoSlice.reducer;