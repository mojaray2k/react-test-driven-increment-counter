# Click Counter

## A very basic app to demonstrate React TDD

### Branches

- `master`

  This branch represents the project at the end of the instructional videos, without any of the challenges completed.

- `click-counter-challenges`

  This branch contains solutions to the challenges.

## Challenges

### 1. Decrement button

- Create a new button that subtracts 1 from the counter
- Add functionality that decrements the counter when the new button is clicked.

### 2. No count below 0

- Don't let the counter go below zero.
  - if the counter is at 0 and the decrement button is clicked:
    - don't decrement the counter
    - display an error message saying the counter can't go below zero

#### 3. Remove error when increment button is clicked

- If error is showing and increment button is clicked, clear the error.

### Accomplishments

1. Setup a (very) simple React app with Jest and Enzyme
2. Used Enzyme's **shallow()** function to render a component
3. Tested that required **DOM** elements were rendered using **find()**
4. Tested state using Enzyme's **setState()** and **state()** methods
5. Used **simulate** to interact with rendered elements (clicked button)
6. Tested component for updates after interaction.
7. Created re-usable **setup()** and **findByAttr()** functions.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
