import React from "react";
import { useSelector } from "react-redux";

function Menu1({ name, img, productByCategory }) {
  const { loading } = useSelector((state) => state.loadingReducer);

  return (
    <div className="p-4 bg-gray-200">
      <div className="text center font-script text-black text-3xl mb-2  text-6xl text-gold">
        ~{name}~
      </div>
      <div className={`w-full h-32  mb-2 ${img}`}></div>
      <div className="w-full ">
        {loading && <p>Loading menu...</p>}
        {!loading &&
          productByCategory?.map((item) => (
            <div key={item?._id}>
              <h6 className="text-sm text-left font-weight-bold text-gold">
                {item?.name}
              </h6>
              {item?.products?.map((product) => (
                <div className="d-flex justify-content-between p-0 list-disc mb-0">
                  <p className="text-xs font-weight-light">{product?.title}</p>
                  <span className="text-sm  font-weight-bold text-gold">
                    {product?.price} {product?.currency}
                  </span>
                </div>
              ))}
              {/* <div className="d-flex justify-content-between p-0 list-disc">
              <p className="text-xs font-weight-light">
                {" "}
                Large 6 birre da 10 cl
              </p>
              <span className="text-sm  font-weight-bold text-gold">12$</span>
            </div> */}
            </div>
          ))}

        {/* <h6 className="text-sm text-left font-weight-bold text-gold">Primi</h6>
        <div className="d-flex justify-content-between p-0 l">
          <div>
            <p className="text-xs text-left font-weight-bold mb-0">
              {" "}
              Pasta vourmet
            </p>
            <p className="text-xs text-left font-weight-light">
              {" "}
              pomodoro zucchine aglio
            </p>
          </div>
          <span className="text-sm  font-weight-bold text-gold">5$</span>
        </div>
        <div className="d-flex justify-content-between p-0 list-disc">
          <div>
            <p className="text-xs text-left font-weight-bold mb-0">
              {" "}
              Pasta vourmet
            </p>
            <p className="text-xs text-left font-weight-light">
              {" "}
              pomodoro zucchine aglio
            </p>
          </div>
          <span className="text-sm  font-weight-bold text-gold">5$</span>
        </div> */}
        {/* <h6 className="text-sm text-left font-weight-bold text-gold">Vini</h6>
        <div className="d-flex justify-content-between p-0 list-disc">
          <p className="text-xs font-weight-light"> Rose</p>
          <span className="text-sm  font-weight-bold text-gold">12$</span>
        </div>
        <div className="d-flex justify-content-between p-0 list-disc">
          <p className="text-xs font-weight-light"> Bianco della casa</p>
          <span className="text-sm  font-weight-bold text-gold">12$</span>
        </div>
        <div className="d-flex justify-content-between p-0 list-disc">
          <p className="text-xs font-weight-light"> Rosso della casa</p>
          <span className="text-sm  font-weight-bold text-gold">12$</span>
        </div> */}
      </div>
    </div>
  );
}

export default Menu1;
