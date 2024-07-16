// Entry page to display info about the app
// @module controllers/entry
// @fileOverview - This file contains the API entry point.

// API entry documentation
export const ApiEntryDoc = {
  message: "Welcome to the API",
  description: "This is a RESTful API for a blog application",
  routes: {
    default: "/api/v1",
    content: "/api/v1/content/:id",
  },
};