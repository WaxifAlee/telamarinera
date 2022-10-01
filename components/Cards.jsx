import React from "react";
import Card from "./Card";
import cardsStyle from "../styles/Cards.module.css";

const Cards = () => {
  return (
    <div className={cardsStyle.container}>
      <Card
        title={"Quality Meal"}
        description={
          "We serve only the best food, full of nutrients, made out of fresh stock direct from farms. Don't believe? Try out for yourself!"
        }
      />
      <Card title={"Our Open Hours"} description={"Serving the best food "} />
      <Card
        title={"Cafe Telamarinera [C2]"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid"
        }
      />
    </div>
  );
};

export default Cards;
