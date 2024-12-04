import { Component } from "solid-js";

export const Logo: Component<{ class?: string }> = (props) => {
  return (
    <div class={`flex items-center space-x-2 ${props.class || ''}`}>
      <svg 
        class="w-10 h-10 text-blue-600 dark:text-blue-500" 
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
        <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm15 45h-30V35h30v30z"/>
        <path d="M45 40h-5v15h15v-5h-10z"/>
      </svg>
      <div class="flex flex-col">
        <span class="text-xl font-bold text-gray-900 dark:text-white">WFM</span>
        <span class="text-xs text-gray-600 dark:text-gray-400">Workforce Management</span>
      </div>
    </div>
  );
}; 