---
title: "{{ replace .Name "-" " " | title }} | "
date: {{ .Date }}
draft: true
image: assets/uploads/{{ replace .Name " " "-" | lower }}-4by3.jpg
name: "{{ replace .Name "-" " " | title }}"
age: "..."
help: "Received help with..."
summary:
  heading: "“Real change helped me ...”"
  image: assets/uploads/{{ replace .Name " " "-" | lower }}-5by2.jpg
  text: "Read {{ replace .Name "-" " " | title }} story"
realchange:
  heading: "The real change you made"
  body: |
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    url: #URL
    text: "Donate and make a real change"
---

## {{ replace .Name "-" " " | title }} Story

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
