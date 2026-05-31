# AI Content Structuring Tool

This is a simple AI-assisted content structuring tool built with React. It takes unstructured text and transforms it into a more organized format with a summary, key points, and full content display.

## What it does

The tool allows users to paste raw text and then generates a structured version of it. It includes:

- A short summary generated from the first sentences
- Key points extracted from the text
- The original content displayed for reference

The goal is to simulate how AI tools help restructure and simplify information for better readability and organization.

## How it works

The application uses basic text processing logic to split and clean input text. It then formats the content into structured sections. The key points are generated using simple sentence extraction and formatting rules to mimic AI-style output.

This project does not use external AI APIs. Instead, it focuses on demonstrating how content structuring logic can be implemented using JavaScript.

## Technologies used

- React
- JavaScript
- HTML/CSS (inline styling)

## Purpose

This project was built as a learning exercise to understand how content processing tools work and how AI-like behavior can be simulated using rule-based logic. It demonstrates basic front-end development skills and text processing techniques.

## Live demo

https://ai-content-structurer.vercel.app/

## How to run locally

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` or `npm start`
4. Open the local server in your browser

## Future improvements

Possible upgrades for this project include:
- Integrating a real AI API for smarter summarization
- Adding export options (PDF or text download)
- Improving UI with a more modern interface
- Adding multiple content modes (summary, rewrite, expand)

---
