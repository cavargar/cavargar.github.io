// Language detection and switching for cavargar.github.io
(function() {
  'use strict';

  // Language mappings for each page
  const pageLanguages = {
    '/': 'en',
    '/index': 'en',
    '/index.html': 'en',
    '/index_es': 'es',
    '/index_es.html': 'es',
    '/research': 'en',
    '/research.html': 'en',
    '/research_es': 'es',
    '/research_es.html': 'es'
  };

  // Corresponding pages in other language
  const languagePairs = {
    '/': '/index_es',
    '/index': '/index_es',
    '/index.html': '/index_es',
    '/index_es': '/',
    '/index_es.html': '/',
    '/research': '/research_es',
    '/research.html': '/research_es',
    '/research_es': '/research',
    '/research_es.html': '/research'
  };

  // Get current page path
  const currentPath = window.location.pathname;
  const currentLang = pageLanguages[currentPath];

  // Check if user has manually selected a language before
  const hasManualSelection = localStorage.getItem('manualLangSelection') === 'true';

  // Only auto-detect on first visit (no manual selection stored)
  if (!hasManualSelection && currentLang) {
    const userLang = navigator.language || navigator.userLanguage;
    const isSpanishBrowser = userLang.startsWith('es');

    // Redirect if browser language doesn't match page language
    if (isSpanishBrowser && currentLang === 'en' && languagePairs[currentPath]) {
      window.location.href = languagePairs[currentPath];
    } else if (!isSpanishBrowser && currentLang === 'es' && languagePairs[currentPath]) {
      window.location.href = languagePairs[currentPath];
    }
  }

  // Function to switch language
  window.switchLanguage = function(lang) {
    // Mark that user has manually selected a language
    localStorage.setItem('manualLangSelection', 'true');

    // Redirect to appropriate page
    if (languagePairs[currentPath]) {
      if ((lang === 'es' && currentLang === 'en') || (lang === 'en' && currentLang === 'es')) {
        window.location.href = languagePairs[currentPath];
      }
    }
  };

  // Function to reset auto-detection (useful for testing)
  window.resetLanguagePreference = function() {
    localStorage.removeItem('manualLangSelection');
    console.log('Language preference reset. Reload to auto-detect.');
  };
})();
