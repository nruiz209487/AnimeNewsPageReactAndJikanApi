export type Route = {
  name: string;
  path: string;
};

export const ROUTES: Route[] = [{ name: "Home", path: "/" }];

export function getRoutes(): Route[] {
  return ROUTES;
}
