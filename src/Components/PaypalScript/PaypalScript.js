import React from "react";
import { getPaypalStatus } from "api/Public";

const PaypalScript = () => {
  const [paypalData, setPaypalData] = React.useState({});
  let [state, setState] = React.useState(
    paypalData?.merchant_id ? "loading" : "idle"
  );

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getPaypalStatus();
        setPaypalData(res?.data?.data);
      } catch (error) {
        setState("not-connected");
        console.log({ error });
      }
    })();
  }, []);

  React.useEffect(() => {
    if (!paypalData?.merchant_id) {
      setState("idle");
      return;
    }
    if (
      paypalData &&
      Object.keys(paypalData).length &&
      (!paypalData?.payments_receivable || !paypalData?.merchant_id)
    ) {
      setState("not-connected");
      return;
    }

    const { merchant_id } = paypalData;
    const url = `https://www.paypal.com/sdk/js?client-id=AdRJCWvdnox2csGofPFAdVUKxd0d3FEPKovp1nGfCg0X3yDS4kUEov6kAeG0L6UiNLezOrlB1prkCsOp&merchant-id=${merchant_id}&components=buttons,funding-eligibility`;
    let script = document.querySelector(`script[src="${url}"]`);

    const handleScript = (e) => {
      setState(e.type === "load" ? "ready" : "error");
    };

    if (!script) {
      script = document.createElement("script");
      script.type = "application/javascript";
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
      script.addEventListener("load", handleScript);
      script.addEventListener("error", handleScript);
    }
    script.addEventListener("load", handleScript);
    script.addEventListener("error", handleScript);

    return () => {
      script.removeEventListener("load", handleScript);
      script.removeEventListener("error", handleScript);
    };
  }, [paypalData]);

  return state;
};

export default PaypalScript;
