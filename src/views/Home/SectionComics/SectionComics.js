import React from "react";
import Title from "../../../components/Title/Title";
import Slider from "../../../components/Slider/Slider";
import Button from "../../../components/Button/Button";
import "./SectionComics.scss";

const SectionComics = () => {

    return(
        <section className="section-home section-meetings">
            <Title variant={`black`}>Księgarnia</Title>
            {/* <Slider /> */}
            <Button variant={`blue`}>Do sklepu</Button>
        </section>
    )
}

export default SectionComics;
