window.addEventListener("load", () => {
  const web_domain = window.location.host;
  const ahrefs = document.querySelectorAll("a") || [];
  const regexPattern = /^(http:\/\/|https:\/\/)/;
  for (let a of ahrefs) {
    if (regexPattern.test(a.href) && !a.href.includes(web_domain)) {
      console.log("[*] external url found...");
      a.setAttribute("target", "_blank");
    }
  }
});