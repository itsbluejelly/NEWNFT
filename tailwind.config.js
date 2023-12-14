/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        'link-side-panel-container': 'rgba(0, 0, 0, 0.6)',
        'link-side-panel-container__side-panel': 'rgb(24, 25, 27)',
        'link-side-panel-container__side-panel--rewards-button': 'rgb(20, 20, 20)',
        'search-bar': 'rgba(255, 255, 255, 0.00)',
        'small-screen-buttons__search-button': 'rgba(18, 18, 18, 0.5)',
        'small-screen-buttons__wallet-button': 'rgb(255, 219, 36)',
        'search-container': 'rgba(255, 255, 255, 0.2)',
        'container__selling_stats--chosen_chain': 'rgba(161, 151, 170, 0.1)',
        'container__content-container': 'rgb(18, 12, 24)',
        'container__content-container--paying_stats': 'rgb(28, 19, 38)',
        'container__content-container--paying_stats--button': 'rgb(228, 37, 117)',
        // SPECIAL CLASSES
        'link-side-panel-container__side-panel--rewards-button++active': 'rgb(231, 215, 150)',
        'description--buttons--link++hover': 'rgb(255, 255, 255, 0.7)',
        'carousel-container__button++hover': 'rgba(255, 255, 255, 0.5)',
        'greenish':'#093030'
      },

      boxShadow: { 
        'link-side-panel-container__side-panel': '0px 10px 20px black',
        'dropdown-content': '0px 8px 16px 0px rgba(0,0,0,0.2)',
        'search-container__search-bar': '0px 0px 10px black'
      },
      
      colors: { 
        'side-panel--navbar--side-buttons--p': 'rgb(156, 163, 175)', 
        'link-side-panel-container__side-panel--launchpad-section--div--a': 'rgb(231, 215, 150)',
        'link-side-panel-container__side-panel--rewards-button': 'rgb(231, 215, 150)',
        'side_panel--title--description--p--a': 'rgb(118, 169, 250)',
        'container--h1': "#9ca3af",
        'container__selling_stats': "#9ca3af",
        'overview-container__footer--p': "#9ca3af",
        'list--entry--description': "#9ca3af",
        'search-container': 'rgba(255, 255, 255, 0.2)',
        // SPECIAL CLASSES
        'link-side-panel-container__side-panel--rewards-button++active': 'rgb(20, 20, 20)',
        'text-green':'#31c48d',
        'text-gray':'#9ca3af',
        'border-gray':'#2f3641'
      },

      borderColor: {
        'link-side-panel-container__side-panel--rewards-button': 'rgb(231, 215, 150)',
        'link-side-panel-container__side-panel--navbar': 'rgb(156, 163, 175, 0.5)',
        'small-screen-buttons__search-button': 'rgb(47, 54, 65)',
        'small-screen-buttons__wallet-button': 'rgb(255, 219, 36)',
        'container__content-container': 'rgb(28, 19, 38)',
        'overview-container__partnerships': 'rgb(255, 255, 255)',

      },
      
      width: {
        '90': '90vw'
      },
      screens: {
        'small': '10px'
      }
    },
  },
  plugins: [],
}

