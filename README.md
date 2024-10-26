## Run project locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Working with Expo:
It had been a long time since I worked on a project with Expo, and it only took me a few minutes of reading to get familiar with the environment again. Once I did, I absolutely loved the workflow—I had forgotten how enjoyable developing with Expo can be.

## Architectural Decisions
I focused on how to develop a messaging app that prioritizes client-side resources. With this approach in mind, I decided not to concentrate heavily on building the actual messaging functionality. Instead, I aimed to create an app with a strong user experience and an architecture flexible enough to integrate a messaging service down the line. For now, I chose to simulate this functionality using simple local storage.

## About the Design
The app's design draws significant inspiration from popular messaging apps in Mexico, like WhatsApp, Telegram, and Instagram, but with a more formal tone. I chose to develop and style the components myself rather than relying on external libraries, as this approach offers greater creative freedom and flexibility. Additionally, I don’t have extensive experience with component libraries, so building custom components allowed me to tailor the design more precisely to the app’s needs

## Trade-offs
As you may notice, the design of the initial screens is more polished compared to the others. I invested significant time and attention to detail into the first screen, which took longer than expected. Given this, I chose to prioritize delivering a functional app over refining every screen’s aesthetics. While these screens may not yet stand out visually, they provide a foundation that can be improved iteratively, ensuring the core functionality of the app is delivered effectively.

One of the primary trade-offs involved how data is handled. I opted not to use a state management tool for caching data, which could have optimized data retrieval and improved component readability

## Final thoughts
This project provided an excellent opportunity to balance design, functionality, and efficiency within a limited timeframe. While there were trade-offs, especially between detailed UI design and overall app functionality, each decision was made to ensure a solid user experience and a flexible foundation for future enhancements.

The approach taken with architecture and component customization allowed for creative freedom and adaptability, while the choice to simulate messaging functionality through local storage kept the focus on delivering a working prototype. Moving forward, there’s potential to refine the UI incrementally and introduce state management to optimize data handling. Overall, the project has established a robust starting point for building a well-rounded, user-focused app.



https://github.com/user-attachments/assets/d5d3ff07-20c4-404c-8ab4-162dc023b3c1

