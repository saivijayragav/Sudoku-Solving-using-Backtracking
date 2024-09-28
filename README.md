# Sudoku Solver

This project is a simple web-based Sudoku solver that visualizes the solving process in real-time. The solver fills in the Sudoku grid step-by-step, making it easy to see how the solution is derived.

## Project Structure

The project consists of three main files:

1. **`index.html`**: The HTML structure of the Sudoku solver, including the grid layout and the "Solve" button.
2. **`styles.css`**: The CSS file for styling the Sudoku grid and other elements on the page.
3. **`sudo.js`**: The JavaScript file that contains the logic for solving the Sudoku puzzle and dynamically updating the grid display.

## Files

### 1. `index.html`

This file contains the main layout of the Sudoku solver. It defines the 9x9 Sudoku grid using a series of nested `<div>` elements. Each 3x3 sub-grid is encapsulated in a `div` with the class `m`, and the cells within are identified by unique IDs to facilitate dynamic updates.

### 2. `styles.css`

This file includes the styles for the Sudoku solver. It defines the layout, colors, and fonts used in the application, ensuring a consistent and visually appealing design.

Key styles include:

- Grid layout and alignment
- Background colors for the grid and cells
- Button styling and hover effects

### 3. `sudo.js`

This JavaScript file handles the Sudoku-solving logic and interacts with the DOM to update the grid. It includes functions to:

- Display the initial puzzle.
- Check if a number can be placed in a specific cell (based on Sudoku rules).
- Solve the Sudoku puzzle using a backtracking algorithm.
- Animate the solving process by updating the grid in real-time.

## How to Run

1. Clone the repository:

   ```sh
   git clone https://github.com/saivijayragav/sudoku-solver.git
   ```

2. Open the `index.html` file in your web browser.

3. Click the "Solve" button to see the Sudoku solver in action.

## Features

- **Real-time Visualization**: Watch as the Sudoku puzzle is solved step-by-step.
- **Responsive Design**: The grid layout adapts to different screen sizes, making it accessible on various devices.
- **Simple Interface**: Easy-to-use interface with a single "Solve" button to initiate the solving process.

## Customization

You can customize the initial puzzle by modifying the `puzzle` array in `sudo.js`. Update the values in the array to set up different Sudoku puzzles.

```javascript
const puzzle = [
  [0,0,0,0,0,6,0,0,3],
  [0,0,0,0,1,0,4,0,0],
  ...
];
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
