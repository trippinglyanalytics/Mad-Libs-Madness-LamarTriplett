# Mad Libs Madness

A fun, interactive web-based Mad Libs game built with vanilla HTML, CSS, and JavaScript.

## Overview

Mad Libs Madness is an interactive storytelling game where users fill in words of different types (nouns, adjectives, names, etc.) to create a humorous story. This project demonstrates fundamental web development skills including DOM manipulation, form handling, and responsive design.

## Features

- **Interactive Form**: Users input various types of words through labeled form fields
- **Dynamic Story Generation**: Creates a personalized Mad Libs story based on user inputs
- **Play Again Functionality**: Reset the form to create new stories
- **Beautiful UI**: Gradient background with cloud effects and smooth animations
- **Accessibility**: Properly labeled form inputs for screen reader compatibility
- **Input Validation**: Handles empty inputs by displaying placeholders

## How to Use

1. **Open the Game**: Open `index.html` in a web browser
2. **Fill in the Words**: Enter words for each prompt:
   - A Relative
   - Three Adjectives
   - A Famous Person
   - A Noun
   - A Dessert
   - Your Pet's Name
3. **Generate Story**: Click the "Generate" button to create your Mad Libs story
4. **Play Again**: Click the "Play Again" button to reset and create a new story

## Project Structure

```
M3-SkillBuilder-Mad-Libs-Madness-LamarTriplett/
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and animations
├── replit.nix      # Repl.it configuration
└── media7/         # Media assets
    └── word_vacation.mp4
```

## Technologies Used

- **HTML5**: Semantic structure and form elements
- **CSS3**: Modern styling with gradients, animations, and transitions
- **JavaScript (ES6)**: DOM manipulation and event handling
- **Google Fonts**: "Luckiest Guy" and "Delius" font families

## Key Functions

### JavaScript Functions

- `formValue(id)`: Retrieves and validates form input values
- `addClassToElement(id, className)`: Adds CSS classes to elements dynamically
- `generate()`: Creates the Mad Libs story from user inputs
- `playAgain()`: Resets the form for a new game

## Styling Highlights

- Responsive gradient background (red to steelblue)
- CSS cloud effects using box-shadows
- Smooth transitions and animations
- Form input styling with focus states
- Custom button hover effects

## Browser Compatibility

This project works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Educational Purpose

This project was created as a Module 3 Skill Builder exercise to practice:
- HTML form handling
- DOM manipulation with JavaScript
- CSS styling and effects
- User input validation
- Event-driven programming

## Future Enhancements

Potential improvements could include:
- Multiple story templates
- Save and share functionality
- Sound effects
- Mobile-responsive optimizations
- Additional input validation with visual feedback
- Dark mode toggle

## Author

Lamar Triplett

## License

Educational project for learning purposes.

---

*Have fun creating hilarious Mad Libs stories!*
