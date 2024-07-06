# Card Game Project

## Overview

This project is a web-based card game application built with React, TypeScript, TailwindCSS, and Vite. The application is deployed on Vercel and features a responsive design suitable for both desktop and mobile devices. Currently, the project includes a Poker Game and a Card Arena. More games and functions will be added in the future.

## Features

- **Poker Game**: Simulates a poker game with customizable options for the number of players, cards per player, and whether to include jokers.
- **Card Arena**: A place where different card games and functionalities will be added.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Card Flipping**: Allows cards to be flipped to reveal their faces.

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable components
│   ├── PokerCard/
│   │   ├── PokerCard.tsx
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   ├── Controls/
│   │   ├── SelectControl.tsx
│   │   ├── CheckboxControl.tsx
│   │   └── NumberInputControl.tsx
|   |
├── hooks/          # Custom hooks
│   └── usePlayerHands.ts
├── pages/          # Page components
│   ├── Home.tsx
│   ├── PokerGame.tsx
│   └── NotFound.tsx
├── styles/         # Global styles
│   └── index.css
├── utils/          # Utility functions
│   ├── creatDeck.ts
│   ├── dealCards.ts
│   └── shuffleDeck.ts
├── enums/          # Enums for card properties
│   └── enums.ts
├── types/          # Type definitions
│   └── types.ts
├── App.tsx
└── main.tsx
```

## Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm start
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Deploy:**
   The project is set up to be deployed on Vercel. Follow the Vercel deployment steps to deploy your application.

## Usage

- **Home Page**: Overview of the available card games.
- **Poker Game**: Configure and play a poker game. Customize the number of players, cards per player, and whether to include jokers.

## Future Plans

- Add more card games to the Card Arena.
- Implement more game rules and functionalities.
- Enhance the user interface and experience.
- Add animations for dealing and shuffling cards.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-new-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README further based on your project's specific requirements and progress.
