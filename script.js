// ==UserScript==
// @name         Copy Tab as Markdown Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy current tab title and URL as markdown link when pressing Ctrl+Shift+C
// @author       KoStard
// @match        *://*/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    // Listen for the keyboard shortcut
    document.addEventListener('keydown', function(event) {
        // Check if Ctrl+Shift+C was pressed (Command+Shift+C on Mac)
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
            // Prevent the default browser behavior (including dev tools)
            event.preventDefault();
            event.stopPropagation();

            // Get the current page title and URL
            const pageTitle = document.title
                .replace(/\s*\([^)]*\)\s*/g, '') // Remove parentheses and their content
                .trim(); // Remove leading/trailing whitespace
            const pageUrl = window.location.href;

            // Create markdown formatted link
            const markdownLink = `[${pageTitle}](${pageUrl})`;

            // Copy to clipboard using GM_setClipboard
            GM_setClipboard(markdownLink);

            // Optional: Show a brief notification
            const notification = document.createElement('div');
            notification.textContent = 'Copied to clipboard!';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 10px 20px;
                border-radius: 5px;
                z-index: 9999;
                animation: fadeOut 2s forwards;
            `;

            document.body.appendChild(notification);

            // Remove notification after animation
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
    });

    // Add fadeOut animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
})();

