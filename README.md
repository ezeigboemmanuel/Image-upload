# Next.js Image Upload App

This is a Next.js application that allows users to upload images to Cloudinary and stores the data in MongoDB. Follow the steps below to get the application up and running.

## Prerequisites

Ensure you have the following set up:

1. **Cloudinary Account**:

   - Sign up at [Cloudinary](https://cloudinary.com/) if you don't have an account.
   - Get your `CLOUD_NAME`, `API_KEY`, and `API_SECRET` from your Cloudinary dashboard.

2. **MongoDB Database**:

   - Create a MongoDB database and get the connection string (e.g., `MONGO_URI`).
   - You can use [MongoDB Atlas](https://www.mongodb.com) for a free cloud database.

3. **Node.js and npm/yarn**:

   - Install [Node.js](https://nodejs.org/).

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ezeigboemmanuel/Image-upload.git
   cd my-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create an `.env.local` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=<your_mongo_connection_string>
   CLOUD_NAME=<your_cloudinary_cloud_name>
   API_KEY=<your_cloudinary_api_key>
   API_SECRET=<your_cloudinary_api_secret>
   ```

   Replace `<your_mongo_connection_string>`, `<your_cloudinary_cloud_name>`, `<your_cloudinary_api_key>`, and `<your_cloudinary_api_secret>` with your actual values.

---

## Usage

### 1. Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 2. Image Upload

- Navigate to the upload page.
- Select an image and click the upload button.
- The image will be uploaded to Cloudinary, and its data (e.g., URL) will be saved in MongoDB.

---

## Deployment

1. Build the application:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:

   ```bash
   npm start
   # or
   yarn start
   ```

Alternatively, deploy the app to a cloud provider like [Vercel](https://vercel.com/):

- Push your code to GitHub or another Git hosting service.
- Import your repository to Vercel.
- Set your environment variables (`MONGO_URI`, `CLOUD_NAME`, `API_KEY`, `API_SECRET`) in the Vercel dashboard.

---

## Troubleshooting

1. **MongoDB Connection Errors**:

   - Verify that `MONGO_URI` is correctly set and accessible.
   - Ensure that IP whitelist settings in MongoDB Atlas allow connections from your IP or are set to allow all.

2. **Cloudinary Errors**:

   - Double-check your `CLOUD_NAME`, `API_KEY`, and `API_SECRET`.
   - Ensure your Cloudinary account has sufficient quota.

---

## Video Guide

If you prefer a video walkthrough of how to build this application, watch the tutorial here:

[Video Tutorial Link](https://youtu.be/ScR8ShNG9CU) (Replace with the actual link)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

