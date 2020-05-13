const openZoom = event => {
    const src = event.currentTarget.src;
    const img = document.querySelector("#zoom");
    const back = document.querySelector("#zoom-background");
  
    if (img.classList.contains("zoom-show")) return false;
  
    img.src = src;
    img.classList.add("zoom-show");
    img.classList.remove("zoom-hide");
    back.style.display = "block";
    document.body.style.overflow = "hidden";
  };
  
  const closeZoom = async () => {
    const img = document.querySelector("#zoom");
    const back = document.querySelector("#zoom-background");
  
    if (img.classList.contains("zoom-hide")) return false;
    
    img.classList.add("zoom-hide");
    await zoomSleep(500);
    img.classList.remove("zoom-show");
    back.style.display = "";
    document.body.style.overflow = "";
  };
  
  const zoomImage = node => {
    const imgZoom = document.createElement("img");
    const backgroundZoom = document.createElement("div");
  
    imgZoom.setAttribute("onClick", "closeZoom()");
    imgZoom.id = "zoom";
  
    backgroundZoom.setAttribute("onClick", "closeZoom()");
    backgroundZoom.id = "zoom-background";
  
    
    document.body.appendChild(backgroundZoom);
    document.body.appendChild(imgZoom);
  
    document
      .querySelector(node)
      .querySelectorAll(".zoom-item")
      .forEach(element => element.setAttribute("onClick", "openZoom(event)"));
  };
  
  const zoomSleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  zoomImage(".zoom-wrapper")
  
  