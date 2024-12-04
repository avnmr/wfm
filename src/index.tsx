/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App'
import 'flowbite';

// Initialize dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const root = document.getElementById('root')
render(() => <App />, root!)
