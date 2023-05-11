import React from "react";
import { BlogFrontMatter } from "../types";

export const ArticleContext = React.createContext<BlogFrontMatter | null>(null);
export const useArticleContext = () => React.useContext(ArticleContext);
