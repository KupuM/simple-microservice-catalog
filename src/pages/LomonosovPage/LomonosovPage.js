import React from "react";
import LomonosovPageData from "@/mocks/lomonosov.json";

const LomonosovPage = () => {
    const { title, content, subtitle } = LomonosovPageData;

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

export default LomonosovPage;
