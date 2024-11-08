// App.tsx
import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline, Container, Stack, Slider, Typography } from "@mui/material";
import ArticleAccordion from "./components/ArticleAccordion";
import articlesData from "./components/articles";
import "./styles.scss";

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: "#1976d2",
            },
            secondary: {
                main: "#dc004e",
            },
        },
        typography: {
            fontFamily: "Arial, sans-serif",
        },
    });

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Typography variant="h4" gutterBottom align="center">
                    Articles
                </Typography>
                <Slider
                    value={darkMode ? 1 : 0}
                    onChange={toggleTheme}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={[
                        { value: 0, label: "Light" },
                        { value: 1, label: "Dark" },
                    ]}
                    min={0}
                    max={1}
                />
                <Stack spacing={2}>
                    {articlesData.map((article, index) => (
                        <ArticleAccordion
                            key={index}
                            title={article.title}
                            content={article.content}
                            isDark={darkMode}
                        />
                    ))}
                </Stack>
            </Container>
        </ThemeProvider>
    );
};

export default App;
