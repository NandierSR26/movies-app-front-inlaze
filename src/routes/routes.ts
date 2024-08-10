import { lazy, LazyExoticComponent } from "react";
import { HomePage } from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const popularityPage = lazy(() => import("../pages/Movies/PopularityPage"));
const ratingPage = lazy(() => import("../pages/Movies/RatingPage"));
const nowPlayingPage = lazy(() => import("../pages/Movies/NowPlayingPage"));
const upcomingPage = lazy(() => import("../pages/Movies/UpcomingPage"));

export const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    Component: HomePage,
    name: "Home",
  },
  {
    to: "/popularity",
    path: "popularity",
    Component: popularityPage,
    name: "Popular",
  },
  {
    to: "/now-playing",
    path: "now-playing",
    Component: nowPlayingPage,
    name: "Now Playing",
  },
  {
    to: "/upcoming",
    path: "upcoming",
    Component: upcomingPage,
    name: "Upcoming",
  },
  {
    to: "/top-rated",
    path: "top-rated",
    Component: ratingPage,
    name: "Top Rated",
  },
];
