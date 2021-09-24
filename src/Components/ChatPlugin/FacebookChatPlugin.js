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
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, [pageId]);
  return pageId && <div class="fb-customerchat" page_id={pageId}></div>;
}
