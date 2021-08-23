import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const useStyle = () => ({
  container: {
    marginTop: "30px",
    background: "white",
    padding: "10px",
    borderRadius: "20px",
  },
});

export default function MenuList({ isDeal, discountGenre }) {
  const styles = useStyle();

  const [items, setItems] = useState([
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
    {
      price: "15€",
      itemName: "Linguine ai frutti di mare",
      allergeni: ["Farina", "Crostacei"],
      ingredients: ["Pasta di grano", "cozze", "vongole", "calamari"],
      tags: { vegan: true },
    },
  ]);

  useEffect(() => {
    console.log(isDeal, discountGenre);
  });

  return (
    <div style={styles.container}>
      <bold className="h1">Primi Piatti</bold>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-6">
            <MenuItem {...item} discountGenre={discountGenre} isDeal={isDeal} />
          </div>
        ))}
      </div>
    </div>
  );
}
