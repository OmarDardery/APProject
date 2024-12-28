import React from 'react';
import ReactDOM from'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let references = [
  {
    title: "Binary Trees",
    link: "https://www.w3schools.com/dsa/dsa_data_binarytrees.php"
  },
  {
    title: "strcspn",
    link: "https://www.w3schools.com/php/func_string_strcspn.asp#:~:text=Definition%20and%20Usage,from%20a%20specified%20character%20list"
  },
  {
    title: "strndup/strdup",
    link: "https://www.geeksforgeeks.org/strdup-strdndup-functions-c/"
  },
  {
    title: "linked lists",
    link: "https://programiz.com/dsa/linked-list"
  },
  {
    title: "reading files",
    link: "https://www.w3schools.com/c/c_files_read.php"
  },
  {
    title: "writing files",
    link: "https://www.w3schools.com/c/c_files_write.php"
  },
  {
    title: "preorder traversal",
    link: "https://www.geeksforgeeks.org/preorder-traversal-of-binary-tree/"
  },
];



root.render(
    <App references = {references} />
);