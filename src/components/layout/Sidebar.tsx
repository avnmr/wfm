import { Component, Show } from "solid-js";
import { A, useLocation, useNavigate } from "@solidjs/router";
import { useAuth } from "../../store/auth.store";

const Sidebar: Component<{ isOpen: boolean }> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      ),
    },
    {
      title: "Employee Management",
      path: "/employees",
      icon: (
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
    },
    {
      title: "Schedule",
      path: "/schedule",
      icon: (
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: "Tasks",
      path: "/tasks",
      icon: (
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      ),
    },
    {
      title: "Reports",
      path: "/reports",
      icon: (
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <aside
      class={`h-full transition-all duration-300 ${
        props.isOpen ? "w-[250px]" : "w-[70px]"
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}
    >
      <div class="flex flex-col h-full">
        {/* Header dengan Logo */}
        <div class="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Show
            when={props.isOpen}
            fallback={
              <div class="flex justify-center w-full">
                <div class="rounded-full bg-blue-600 p-2">
                  <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                </div>
              </div>
            }
          >
            <div class="flex items-center gap-3">
              <div class="rounded-full bg-blue-600 p-2">
                <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Workforce Management</span>
            </div>
          </Show>
        </div>

        {/* Navigation dengan icon yang lebih besar */}
        <nav class="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <A
              href={item.path}
              class={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/50"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <div class="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
              <Show when={props.isOpen}>
                <span class="ml-3">{item.title}</span>
              </Show>
            </A>
          ))}
        </nav>

        {/* Footer dengan fungsi logout yang sudah diperbarui */}
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            class="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <Show when={props.isOpen}>
              <span class="ml-3">Logout</span>
            </Show>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;