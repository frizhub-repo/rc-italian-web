import React, { useState } from "react";
import "./reserveTableMenuList.css";

const useStyle = () => ({
  container: {
    maxHeight: "30vh",
    overflowY: "scroll",
  },
  mainText: {
    color: "#B29051",
    fontWeight: "bold",
  },
});

export default function ReserveTableMenuList() {
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
