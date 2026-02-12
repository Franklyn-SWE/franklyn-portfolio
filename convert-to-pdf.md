# How to Convert PROJECT_MANUAL.md to PDF

This guide explains several methods to convert the PROJECT_MANUAL.md file to PDF format.

## Method 1: Using VS Code Extension (Recommended)

### Step 1: Install Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Markdown PDF"
4. Install the extension by yzane

### Step 2: Convert to PDF

1. Open `PROJECT_MANUAL.md` in VS Code
2. Right-click in the editor
3. Select "Markdown PDF: Export (pdf)"
4. PDF will be saved in the same directory

## Method 2: Using Pandoc (Command Line)

### Step 1: Install Pandoc

Download from: https://pandoc.org/installing.html

### Step 2: Convert

```bash
# Basic conversion
pandoc PROJECT_MANUAL.md -o PROJECT_MANUAL.pdf

# With table of contents
pandoc PROJECT_MANUAL.md -o PROJECT_MANUAL.pdf --toc

# With custom styling
pandoc PROJECT_MANUAL.md -o PROJECT_MANUAL.pdf --toc --pdf-engine=xelatex -V geometry:margin=1in
```

## Method 3: Using Online Converter

1. Go to one of these websites:

   - https://www.markdowntopdf.com/
   - https://cloudconvert.com/md-to-pdf
   - https://dillinger.io/ (online markdown editor with PDF export)

2. Upload `PROJECT_MANUAL.md`
3. Click "Convert" or "Export as PDF"
4. Download the PDF

## Method 4: Using Chrome/Edge Browser

### Step 1: Install Markdown Viewer Extension

1. Search for "Markdown Viewer" in browser extensions
2. Install it

### Step 2: Open and Print

1. Open `PROJECT_MANUAL.md` in browser (drag and drop)
2. Press Ctrl+P (Print)
3. Select "Save as PDF"
4. Click "Save"

## Method 5: Using npm package (For Developers)

### Step 1: Install md-to-pdf

```bash
npm install -g md-to-pdf
```

### Step 2: Convert

```bash
md-to-pdf PROJECT_MANUAL.md
```

## Recommended Settings for PDF

For best results, use these settings:

- **Paper Size**: A4 or Letter
- **Margins**: 1 inch (2.54 cm) all sides
- **Font**: Sans-serif (e.g., Arial, Helvetica)
- **Font Size**: 11-12pt for body, 16-24pt for headings
- **Include**: Table of contents, page numbers, headers/footers

## Custom Styling (Pandoc)

Create a file `pdf-style.yaml`:

```yaml
---
geometry: margin=1in
fontsize: 11pt
mainfont: Arial
colorlinks: true
linkcolor: blue
urlcolor: blue
toccolor: black
---
```

Then convert with:

```bash
pandoc PROJECT_MANUAL.md -o PROJECT_MANUAL.pdf --metadata-file=pdf-style.yaml --toc
```

## Troubleshooting

### Images not showing

- Ensure image paths are absolute or relative to the markdown file
- Use file:// protocol for local images

### Tables breaking

- Use smaller font size
- Reduce table column widths
- Consider landscape orientation

### Code blocks formatting

- Ensure syntax highlighting is supported
- Use monospace font for code
- Add line wrapping if needed

---

Choose the method that works best for you. Method 1 (VS Code Extension) is recommended for quick and easy conversion.
