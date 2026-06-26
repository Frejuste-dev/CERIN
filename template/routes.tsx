import { createBrowserRouter, Navigate } from "react-router";
import React, { lazy } from "react";
import { Root } from "./Root";

const HomePage = lazy(() => import("./pages/HomePage/HomePage").then(m => ({ default: m.HomePage })));
const FormationsPage = lazy(() => import("./pages/FormationsPage/FormationsPage").then(m => ({ default: m.FormationsPage })));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage").then(m => ({ default: m.AdmissionsPage })));
const CampusLifePage = lazy(() => import("./pages/CampusLifePage").then(m => ({ default: m.CampusLifePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));

const ProgramCategoryPage = lazy(() => import("./pages/ProgramCategoryPage/ProgramCategoryPage").then(m => ({ default: m.ProgramCategoryPage })));
const ActualitesPage = lazy(() => import("./pages/ActualitesPage/ActualitesPage").then(m => ({ default: m.ActualitesPage })));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage/ArticleDetailPage").then(m => ({ default: m.ArticleDetailPage })));
const ProgramDetailPage = lazy(() => import("./pages/ProgramDetail/ProgramDetailPage").then(m => ({ default: m.ProgramDetailPage })));
const FAQPage = lazy(() => import("./pages/FAQPage/FAQPage").then(m => ({ default: m.FAQPage })));
const RecherchePage = lazy(() => import("./pages/RecherchePage/RecherchePage").then(m => ({ default: m.RecherchePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      {
        path: "formations",
        children: [
          { index: true, Component: FormationsPage },
          {
            path: ":category",
            children: [
              { index: true, Component: ProgramCategoryPage },
              { path: ":slug", Component: ProgramDetailPage }
            ]
          }
        ]
      },
      { path: "admissions", Component: AdmissionsPage },
      { path: "actualites", Component: ActualitesPage },
      { path: "actualites/:slug", Component: ArticleDetailPage },
      { path: "a-propos", Component: AboutPage },
      { path: "vie-ceri", Component: CampusLifePage },
      { path: "contact", Component: ContactPage },
      { path: "faq", Component: FAQPage },
      { path: "recherche", Component: RecherchePage },
      { path: "enseignement-general", element: <Navigate to="/formations/enseignement-general" replace /> },
      { path: "enseignement-technique", element: <Navigate to="/formations/enseignement-technique" replace /> },
      { path: "enseignement-superieur", element: <Navigate to="/formations/enseignement-superieur" replace /> },
      { path: "vie-cerin", element: <Navigate to="/vie-ceri" replace /> },
      { path: "*", Component: NotFoundPage }
    ],
  },
]);
