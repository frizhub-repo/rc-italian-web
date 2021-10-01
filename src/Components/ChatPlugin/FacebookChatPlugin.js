import { getOwnerFacebookPageId } from "api/Public";
import * as React from "react";

export default function FacebookChatPlugin() {
  const [pageId, setPageId] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const res = await getOwnerFacebookPageId();
      setPageId(res.data.data);
    })();
  }, []);
  React.useEffect(() => {
    if (pageId) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: process.env.REACT_APP_FACEBOOK_APP_ID,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v12.0",
        });
      };
      function addScript(d, s, id, src) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = src;
        fjs.parentNode.insertBefore(js, fjs);
      }
      addScript(
        document,
        "script",
        "facebook-sdk",
        "https://connect.facebook.net/en_US/sdk.js"
      );
      addScript(
        document,
        "script",
        "facebook-jssdk",
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
      );
    }
  }, [pageId]);
  return pageId && <div className="fb-customerchat" page_id={pageId} />;
}
