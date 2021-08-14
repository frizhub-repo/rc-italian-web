import React, { useState } from "react";

const useStyle = () => ({
  container: {
    background: "white",
    borderRadius: "10px",
  },
  mainText: {
    color: "#B29051",
    fontWeight: "bold",
  },
});

export default function MenuListItem() {
  const styles = useStyle();
  const [items, setItems] = useState([
    {
      name: "Linguine ai frutti di mare",
      detail: "Pasta di grano, cozze, vongole, calamari",
      price: "15€",
    },
    {
      name: "Linguine ai frutti di mare",
      detail: "Pasta di grano, cozze, vongole, calamari",
      price: "15€",
    },
    {
      name: "Linguine ai frutti di mare",
      detail: "Pasta di grano, cozze, vongole, calamari",
      price: "15€",
    },
    {
      name: "Linguine ai frutti di mare",
      detail: "Pasta di grano, cozze, vongole, calamari",
      price: "15€",
    },
  ]);

  return (
    <div style={styles.container}>
      <ul>
        {items.map((item) => (
          <li className="d-flex justify-content-between px-4 pt-2">
            <div className="d-flex align-items-start">
              <img className="mr-2" src="assets/list-style.png" />
              <div className="d-flex flex-column align-items-start">
                <h5 className="mb-1" style={styles.mainText}>
                  {item.name}
                </h5>
                <p>{item.detail}</p>
              </div>
            </div>
            <div>
              <h5 style={styles.mainText}>{item.price}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
