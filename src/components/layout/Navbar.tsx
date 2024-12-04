import { Component } from "solid-js";
import { useTheme } from "../../store/theme.store";

const Navbar: Component<{ onToggleSidebar: () => void; isSidebarOpen: boolean }> = (props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          {/* Toggle Button */}
          <button
            onClick={props.onToggleSidebar}
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-white"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300"
              style={{
                'transform': props.isSidebarOpen ? 'rotate(0deg)' : 'rotate(180deg)'
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* WFM Portal Title */}
          <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
            WFM Portal
          </h1>
        </div>

        <div class="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            class="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isDarkMode() ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>

          {/* User Profile */}
          <button class="flex items-center text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <img
              class="w-8 h-8 rounded-full"
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 