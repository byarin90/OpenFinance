# Full Stack Developer Technical Assessment - Plaid API Integration and Transactions Display

This project is a small web application that integrates with the Plaid API to fetch bank transactions and displays them in a user-friendly manner. It is built using Node.js (TypeScript) for the backend and React (TypeScript) for the frontend.

## Objective

The goal of this task is to evaluate your ability to integrate with third-party APIs, particularly Plaid, and create a simple web application using full stack development with TypeScript.

## Task Description

Create a small web application that integrates with the Plaid API to fetch bank transactions and display them on a web page. The application should have the following features:

- Backend (Node.js & TypeScript):
  - Set up a new Node.js project.
  - Configure TypeScript in the project.
  - Install and set up Express.js to create an HTTP server.
  - Register and create an account on the Plaid developer portal to obtain API keys for sandbox testing.
  - Create a route (e.g., /transactions) to interact with the Plaid API to fetch transaction data.
  - Implement error handling to gracefully handle errors and log any errors that occur while fetching the transactions.
  - Structure your backend code properly by separating the concerns (routes, controllers, and services).

- Frontend (React & TypeScript):
  - Set up a new React project with TypeScript.
  - Create a basic layout for your application, including a button labeled "Fetch Transactions".
  - When the "Fetch Transactions" button is clicked, make an HTTP GET request to your backend server to fetch transactions from the Plaid API.
  - Display the transactions in a clean, tabular format, including the date, name, amount, and category of each transaction.
  - Implement error handling to show a proper message in the UI if fetching transactions fails for any reason.
  - Structure your React components, services, and styles in a clean and organized way.
  - Ensure the user interface is intuitive and responsive.

## Bonus Points

You can earn bonus points by implementing the following additional features:

- Pagination or infinite scroll to handle a large number of transactions.
- Filtering transactions based on categories.

## Resources

Here are some helpful resources for this project:

- [Plaid API Documentation](https://plaid.com/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [tailwindcss Documentation](https://tailwindcss.com/docs)

## Submission

Please submit your codebase with the proper folder structure. Include a README.md file with instructions on how to run the application locally. Optionally, you can deploy the application to a hosting service of your choice and provide the link.

## Note

Please focus on functionality and simplicity. It is okay if the application is not a polished, production-ready application.

## Installation and Running the Application

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Install backend dependencies: `npm install`
4. Set up environment variables by creating a `.env` file based on the provided `.env.example` file.
5. Start the backend server: `npm start`
6. Navigate to the frontend directory: `cd ../frontend`
7. Install frontend dependencies: `npm install`
8. Start the frontend development server: `npm run dev`
9. Open your web browser and visit `http://localhost:3000` to access the application.

Note: Make sure you have Node.js installed on your machine.

## Conclusion

Congratulations! You have completed the Full Stack Developer Technical Assessment. The provided README.md file includes instructions on how to set up and run the application locally. Feel free to customize the instructions based on your project's specific requirements.

If you have any further questions or need additional assistance, please don't hesitate to reach out.

Happy coding!
