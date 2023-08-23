# Next-Auth Tutorial: Basic Functionality

This tutorial covers the basics of integrating next-auth for authentication in your Next.js application, specifically using OAuth and credentials.

## Introduction

With next-auth, there are various ways to secure your app. When a user signs in, they are redirected to the provider's site and subsequently redirected back to your app. The provider then sends a token to your app, which is used to authenticate the user.

## Components Overview

1. **Client Component**: Observe how the client component is secured and compare it to the server component.
2. **/extra Page**: This page is secured using the `middleware.ts` file.
3. **AuthProvider Component**: Found in the `/context` folder, this component is another method to require authentication for a page.

These methods showcase different ways to require authentication for a page, and all of them will likely be needed at some point in your application's lifecycle.

## Configuration

For a more in-depth look at the available options, refer to the `api/auth/[...nextauth]/options` and `route.ts` files. Integrating next-auth automatically creates a `/api/auth/signin` route for you. However, you can configure a custom route if needed.

## Important Notes

- In the options configuration, the user is hard-coded for this tutorial. In a real-world application, you'd typically use a database to store and retrieve user data.
- For more comprehensive details and advanced configurations, please refer to the official [next-auth documentation](https://next-auth.js.org/).
- Remember, there are also callback functions that can be utilized to handle various pass/fail circumstances during the authentication process.

## Important

- you need this .env.local in the root. Look up how to generate these
  NEXTAUTH_SECRET=...
  GITHUB_ID=...
  GITHUB_SECRET=...
