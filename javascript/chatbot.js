(function (w, d, s, o, f, js, fjs) {
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "nw", "https://chat.norby.io/widget");
nw("init", {
  // Service parameters (do not change it)
  apiKey: "e34b5571-b5f8-43f9-ac1b-a482ec3a0c71",
  serviceBaseUrl: "https://api.norby.io",
  // UI customizations
  lang: "en",
  mainColor: "#606470",
  popupBotAvatarColor: "#E61C42",
  multichat: true,
  botName: "Bot",
  imageTransferEnabled: true,
  informationPage: false,
  // Positioning parameters
  side: "right",
  marginSideDesktop: 50,
  marginBottomDesktop: 50,
  marginSideMobile: 120,
  marginBottomMobile: 120,
});
