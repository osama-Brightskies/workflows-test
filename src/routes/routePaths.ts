export const routePaths = {
  home: "/",
  about: "/about",
  login: "/login",
  register: "/register",
  dashboard:{
    index:'/dashboard',
    users: "/dashboard/users",
  },
  unauthorized: "/unauthorized",
  notFound: "/not-found",
} as const;
