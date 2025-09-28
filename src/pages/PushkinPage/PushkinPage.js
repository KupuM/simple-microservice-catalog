import React from "react";
import PushkinPageData from "@/mocks/pushkin.json";

const PushkinPage = () => {
    const { title, content, subtitle } = PushkinPageData;

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

export default PushkinPage;
