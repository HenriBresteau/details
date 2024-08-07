import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/lottie/sword.json";

const LottieSword = ({ isHovered }) => {
    const lottieRef = useRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: "svg",
            loop: true,
            autoplay: false,
            animationData: animationData,
        });

        if (isHovered) {
            anim.play();
        } else {
            anim.goToAndStop(0, true);
        }

        return () => anim.destroy();
    }, [isHovered]);

    return <div ref={lottieRef} style={{ width: 30, height: 30 }} />;
};

export default LottieSword;
