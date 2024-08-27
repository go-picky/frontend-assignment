# Frontend Assignment: Discussion Page

## Assessment Instructions

### Overview

Your task is to create a discussion page using either React.js or Next.js. This page will display discussion content using provided JSON data. The design and features are up to your creativity but should ensure a good user experience across different devices.

### Instructions

1. Use React.js or Next.js to build the discussion page, you are free to design the page however you want.

2. Use the JSON data provided in the folders to populate the page with discussion content.

3. Interface images are supplied locally. Make sure to integrate them into your design.

4. Discussion content images are given as URLs within the data. Ensure these images are displayed correctly.

5. The page must be responsive and provide a good user experience on Desktop, Tablet, and Mobile devices.

6. Give us instructions for how to run your app.

### Additional Guidelines

- Add as many features as you want. Be creative and try to make the page engaging and functional.
- You can draw inspiration from the [Picky discussion page](https://www.gopicky.com/discussion/95315/mega-giveaway-alert-high-chance-of-winning-apply-now) or the Picky app discussion page.
- Feel free to use any design library to enhance your UI/UX.
- Implementing the page using Next.js with Server-Side Rendering (SSR) can earn you bonus points.

### Instruction on how to run the project

1. **Clone the repository**:

   First, you need to clone the repository to your local machine. You can do this by running the following command in your terminal:

   ```
   git clone https://github.com/mintecr7/frontend-assignment
   ```

2. **Navigate to the project directory**:

   Once the repository is cloned, navigate to the `discussion-page` directory:

   ```
   cd frontend-assignment/discussion-page
   ```

3. **Create a .env.local file**:

   In the project directory, create a new file named `.env.local`. This file will hold your environment variables.

4. **Add environment variables**:

   Open the `.env.local` file and add the following environment variables:

   These variables are used for Google authentication and NextAuth configuration.

5. **Install the dependencies**:

   Now, you need to install the project dependencies. You can do this by running the following command:

   ```
   npm install
   ```

6. **Start the development server**:

   Finally, you can start the development server by running the following command:

   ```
   npm run dev
   ```

   This will start the server on `http://localhost:3000`.

Now, you should be able to access the project in your web browser by navigating to `http://localhost:3000`.
