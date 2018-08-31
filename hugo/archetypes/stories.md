---
type: story
title: '{{ replace .Name "-" " " | title }} |'
date: {{ .Date }}
draft: true
summary:
  heading: “Real change helped me ...”
  image: assets/uploads/{{ replace .Name " " "-" | lower }}-5by2.jpg
  text: Read {{ replace .Name "-" " " | title }} story
content:
  age: '...'
  body: "## \L{{ replace .Name "-" " " | title }} Story\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
  help: 'Received help with...'
  image: assets/uploads/{{ replace .Name " " "-" | lower }}-4by3.jpg
  name: '{{ replace .Name "-" " " | title }}'
realchange:
  body: >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    url: '#URL'
    text: Donate and make a real change
  heading: The real change you made
---
