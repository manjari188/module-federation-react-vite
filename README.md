# React Microfrontends with Module Federation

This repository demonstrates how to set up **React** with **Module Federation** to load microfrontends dynamically using **Vite** for the microfrontend bundling. The setup leverages **Webpack's Module Federation** and **React.lazy** for dynamically loading components at runtime.

## Architecture

The architecture includes:
- **Host Application**: A main React app that dynamically loads microfrontends using **Module Federation**.
- **Microfrontends**: Separate React applications (built with **Vite**) that expose specific components for the host app to consume.

## Features

- **Dynamic Component Loading**: Load microfrontends as React components using **React.lazy** and **Suspense**.
- **Module Federation**: Integrates **Webpack's Module Federation** to enable the sharing of modules between the host app and microfrontends.
- **Vite for Microfrontends**: Uses **Vite** for building and serving microfrontends.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
