import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx"; // Исправлено: используем clsx вместо classNames
import "../ArticleAccordion.scss";

interface ArticleAccordionProps {
    title: string; // Название статьи
    content: string; // Содержимое статьи
    isDark: boolean; // Определяет, является ли статья нечетной
}

const ArticleAccordion: React.FC<ArticleAccordionProps> = ({ title, content, isDark }) => {
    return (
        <Accordion
            className={clsx("article-accordion", { "is-dark": isDark, "is-light": !isDark })}
>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Typography className="content">{content}</Typography>
    </AccordionDetails>
    </Accordion>
);
};

export default ArticleAccordion;
