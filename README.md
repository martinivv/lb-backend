## Overview

This service acts as an event listener for the [Lending and Borrowing Protocol](https://github.com/martinivv/lend-borrow-eip2535).

### Features:

- Listens for events from the Diamond proxy;
- Processes events;
- Manages DB states;
- Synchronizes DB;
- Provides REST APIs.

## Quick Start

1. **`cp .env.template .env`**, then fill out the `.env` file;
2. **`npm i`**
3. **`npm run dev`**
