import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Content } from '../components/content/content';
import { Navbar } from '../components/navbar/navbar';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Navbar/>,
    children: [
      {
        path: ':theme?',
        element: <Content/>,
      },
    ]
  },
]);
