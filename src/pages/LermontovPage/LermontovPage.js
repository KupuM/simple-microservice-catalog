import React from "react";
import LermontovPageData from "@/mocks/lermontov.json";

const LermontovPage = () => {
    const { title, content, subtitle } = LermontovPageData;

    return (
        <article>
            <section style={{ whiteSpace: "pre-line" }}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                {content}
            </section>
        </article>
    );
};

export default LermontovPage;
