import anime from "animejs/lib/anime.es.js";
import { React, useState, useRef, useEffect } from "react";
import "../styles/Player.css";

function Player() {
    const animationRef = useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: ".staggering-grid-demo .el",
            scale: [
                { value: 0.1, easing: "easeOutSine", duration: 500 },
                { value: 1, easing: "easeInOutQuad", duration: 1200 },
            ],
            delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
            loop: true,
        });
    });

    return (
        <div class="container">
            <div class="demo-content staggering-grid-demo">
                <div class="gird">
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                    <div class="square el" />
                </div>
            </div>
        </div>
    );
}

export default Player;