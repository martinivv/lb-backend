## Overview

This service acts as an event listener for the [Lending and Borrowing Protocol](https://github.com/martinivv/lend-borrow-eip2535).

### Features:

- Listens for events from the Diamond proxy;
- Processes events;
- Manages DB states;
- Synchronizes DB;
- RESTful API;
- Supports all CRUD operations;

## Quick Start

1. Run **`yarn hardhat node`** in the [LB protocol's](https://github.com/martinivv/lend-borrow-eip2535) directory
2. Run **`docker-compose up`** in the current's directory
3. Try opening `localhost:8080` in a browser
