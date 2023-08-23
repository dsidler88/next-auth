//only need to add one line to the middleware.ts file
//to apply it to the whole project.
//with a defined matcher, it will apply to all routes that match the matcher,
//but you can also leave it and apply to everything
export { default } from "next-auth/middleware";

//applies nextauth (only) to only matching routes, could be regex
//https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] };
//console.log("AYY MIDDLEWARE");
//so this is where you protect certain pages, or all of then
