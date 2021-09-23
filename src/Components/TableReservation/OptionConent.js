import DiscountCarousel from "Components/Common/DiscountCarousel";
import React from "react";
import { useHistory } from "react-router-dom";
import InformationOption from "./InformationOption";
import OptionListItem from "./OptionListItem";

const useStyle = () => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    width: "90%",
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    position: "relative",
  },
  header: {
    color: "#B29051",
  },
  menus: {
    maxHeight: "150vh",
    overflowY: "scroll",
    padding: "10px 10px 10px 110px",
  },
  groupContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 0px",
  },
  groupImageContainer: {
    background: "white",
    padding: "5px",
    borderRadius: "10px 0px 0px 10px",
  },
  groupButton: {
    background: "#B29051",
    borderRadius: "0px 10px 10px 0px",
    fontSize: "18px",
  },
  dealsRoot: {
    position: "absolute",
    top: "50px",
    left: "-50px",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    width: "150px",
    color: "#F59E0B",
    height: "fit-content",
    backgroundColor: "#fff",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  dealsList: {
    padding: "13px 0",
    borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
    fontSize: "18px",
    cursor: "pointer",
  },
});

export default function OptionContent({
  selected,
  specialMenu,
  setSelectedOffer,
  selectedOffer,
}) {
  const styles = useStyle();
  const history = useHistory();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const showMenuPage = () => history.push("/menu");

  if (selected === "INFORMATIONS")
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{selected}</h1>
        <InformationOption />
      </div>
    );
  else if (selected === "PROMOTIONS")
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{selected}</h1>
        <DiscountCarousel
          setSelectedOffer={setSelectedOffer}
          selectedOffer={selectedOffer}
        />
      </div>
    );
  else
    return (
      <div style={styles.container}>
        <div style={styles.dealsRoot}>
          <div>
            {specialMenu.length ? (
              specialMenu?.map((menu, index) => (
                <p
                  key={menu?._id}
                  style={styles.dealsList}
                  onClick={() => setActiveIndex(index)}
                >
                  {menu?.title}
                </p>
              ))
            ) : (
              <span>These sections don't have any menus!</span>
            )}
          </div>
        </div>
        <h1 style={styles.header}>{selected}</h1>
        <div style={styles.menus} className="row">
          {specialMenu?.[activeIndex]?.items?.length > 0 ? (
            specialMenu?.[activeIndex]?.items?.map(({ category, products }) => (
              <div className="col-sm-12 col-lg-12">
                <OptionListItem products={products} header={category?.name} />
              </div>
            ))
          ) : (
            <span style={{ color: "#fff" }}>
              This menu don't have any sections
            </span>
          )}
        </div>
        <div style={styles.groupContainer} className="input-group">
          <div
            style={styles.groupImageContainer}
            className="input-group-prepend"
          >
            <img src="assets/button-menu.png" width={50} />
          </div>
          <button onClick={showMenuPage} style={styles.groupButton}>
            CHECK ALSO OUR MENU!
          </button>
        </div>
      </div>
    );
}
