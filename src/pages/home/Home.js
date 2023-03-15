import { Container_1 } from "./Container_1";
import { Container_2 } from "./Container_2";

import "./assets/Body_style.css";
import { useEffect, useState } from "react";

export function Home() {
    return (
        <>
            <div className="body_container">
                <Container_1 />
                <Container_2 />
            </div>
        </>
    )
}
