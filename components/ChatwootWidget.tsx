import React, { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: any;
    chatwootSDK?: any;
  }
}

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard',
    };

    (function(d, t) {
      var BASE_URL = "https://chat.power-up-talent.app";
      var g = d.createElement(t) as any, s = d.getElementsByTagName(t)[0] as any;
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      g.onload = function() {
        window.chatwootSDK.run({
          websiteToken: "ZmVhM2IyMmUtZTJkNC00MzU2LWExYTctZWRmYWM5N2NhNTVi", // Sample token
          baseUrl: BASE_URL
        });
      };
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
    })(document, "script");
  }, []);

  return null;
};

export default ChatwootWidget;
