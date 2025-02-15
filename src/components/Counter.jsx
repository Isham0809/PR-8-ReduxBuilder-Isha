/*
useContent : ThemeToggle and Counter : we will going to use useTheme hook to access theme state.
useReducer : Implement in themeContext to manage theme state with action.
useMemo : Counter component to memories result.
useCallBack : event Handle. prevent unneccesary re-render
useSelector : Used in counter component to access the redux store state.
useDispatch : Used in counter component to dispatch redux actions.
*/

import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/CounterSlice";
import { useTheme } from "../context/ThemeContext";
import { Plus, Minus, RotateCcw } from 'lucide-react';

function Counter() {
  // useSelector hook : getting state from redux store.
  const count = useSelector((state) => state.counter.value);

  // useDispatch hook : getting dispatch function from redux.
  const dispatch = useDispatch();

  // useContext hook (Custom hook) : getting theme context
  const {
    state: { isDark, fontSize },
  } = useTheme();

  // useCallback hook - memorized callback function
  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  // useMemo hook : memorized value of calculation
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const fontSizeClasses = {
    Medium: 'text-7xl',
    Large: 'text-9xl'
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl shadow-xl p-8 w-full max-w-md space-y-8 transform hover:scale-[1.02] transition-all duration-300`}>
        <div className="text-center space-y-4">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-purple-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'}`}>
            Counter Component
          </h2>
          
          <div className="space-y-6">
            <div className="relative">
              <div className={`${fontSizeClasses[fontSize]} font-bold ${isDark ? 'text-white' : 'text-gray-800'} transition-all duration-300 transform hover:scale-110`}>
                {count}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                Double Count (Memoized): {doubleCount}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={handleDecrement}
            className={`flex items-center justify-center gap-2 ${
              isDark ? 'bg-red-900/50 hover:bg-red-900/70 text-red-400' : 'bg-red-100 hover:bg-red-200 text-red-600'
            } font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md active:scale-95`}
          >
            <Minus size={18} />
            <span>Decrease</span>
          </button>

          <button
            onClick={handleReset}
            className={`flex items-center justify-center gap-2 ${
              isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            } font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md active:scale-95`}
          >
            <RotateCcw size={18} />
            <span>Reset</span>
          </button>

          <button
            onClick={handleIncrement}
            className={`flex items-center justify-center gap-2 ${
              isDark ? 'bg-green-900/50 hover:bg-green-900/70 text-green-400' : 'bg-green-100 hover:bg-green-200 text-green-600'
            } font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md active:scale-95`}
          >
            <Plus size={18} />
            <span>Increase</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Counter;
