import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Type } from "lucide-react";

function ThemeToggle() {
  // using useContext through our cuustom hook
  const {
    state: { isDark, fontSize },
    dispatch,
  } = useTheme();

  // useCallback for memorized event handles.
  const handleThemeToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [dispatch]);

  const handleFontSize = useCallback(() => {
    dispatch({
      type: "SET_FONT_SIZE",
      payload: fontSize === "Medium" ? "Large" : "Medium",
    });
  }, [dispatch, fontSize]);

  return (
    <div className="flex gap-2">
      <button
        onClick={handleThemeToggle}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
          isDark
            ? "bg-gray-800 text-amber-400 hover:bg-gray-700"
            : "bg-white text-indigo-600 hover:bg-gray-50"
        } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 font-medium`}
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4" />
          </>
        ) : (
          <>
            <Moon className="w-4 h-4" />
          </>   
        )}
        {isDark ? "Light" : "Dark"}
      </button>

      <button onClick={handleFontSize}  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
          isDark 
            ? 'bg-gray-800 text-purple-400 hover:bg-gray-700' 
            : 'bg-white text-indigo-600 hover:bg-gray-50'
        } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 font-medium`}>
            <Type className="w-4 h-4" />
            {fontSize}
      </button>
    </div>
  );
}

export default ThemeToggle;
