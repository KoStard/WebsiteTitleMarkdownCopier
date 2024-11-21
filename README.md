# Website Title Markdown Copier

A simple Tampermonkey userscript that allows you to quickly copy the current webpage's title and URL as a markdown link using a keyboard shortcut.

## Features

- Copy the current page's title and URL as a markdown link with `Ctrl+Shift+C` (or `Cmd+Shift+C` on Mac)
- Automatically removes parenthetical text from titles for cleaner links
- Shows a brief visual confirmation when the link is copied
- Works on any website

## Installation

1. First, install the [Tampermonkey](https://www.tampermonkey.net/) browser extension:
   - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on this link to install the script:
   [Install Script](https://github.com/KoStard/WebsiteTitleMarkdownCopier/raw/main/script.js)

   Or manually:
   - Go to the Tampermonkey dashboard
   - Click the "+" tab to create a new script
   - Copy and paste the contents of `script.js`
   - Save the script (Ctrl+S or Cmd+S)

## Usage

1. Navigate to any webpage
2. Press `Ctrl+Shift+C` (Windows/Linux) or `Cmd+Shift+C` (Mac)
3. A markdown formatted link will be copied to your clipboard
4. A brief notification will appear confirming the copy

Example output: 

```
[Website Title](https://www.example.com)
```

## Features

- Automatically removes text in parentheses from titles
- Clean, minimal notification system
- Works across all websites
- No configuration needed

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements!

## License

This project is open source and available under the MIT License.