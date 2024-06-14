<<<<<<< Updated upstream
const calcTime = (timestamp) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
=======
const calcTime = (timestemp) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestemp);
>>>>>>> Stashed changes
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
<<<<<<< Updated upstream
  else if (second > 0) return `${second}초 전`;
  else "방금 전";
=======
  else if (second >= 0) return `${second}초 전`;
>>>>>>> Stashed changes
};

const renderData = (data) => {
  const main = document.querySelector("main");
<<<<<<< Updated upstream
  data.reverse().forEach(async (obj) => {
    const div = document.createElement("div");
    div.className = "item-list";
=======

  data.reverse().forEach(async (obj) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-list";
>>>>>>> Stashed changes

    const imgDiv = document.createElement("div");
    imgDiv.className = "item-list__img";

    const img = document.createElement("img");
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    img.src = url;

<<<<<<< Updated upstream
    const InfoDiv = document.createElement("div");
    InfoDiv.className = "item-list__info";

    const InfoTitleDiv = document.createElement("div");
    InfoTitleDiv.className = "item-list__info-title";
    InfoTitleDiv.innerText = obj.title;

    const InfoMetaDiv = document.createElement("div");
    InfoMetaDiv.className = "item-list__info-meta";
    InfoMetaDiv.innerText = obj.place + " " + calcTime(obj.insertAt);

    const InfoPriceDiv = document.createElement("div");
    InfoPriceDiv.className = "item-list__info-price";
    InfoPriceDiv.innerText = obj.price;

    imgDiv.appendChild(img);

    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);
    div.appendChild(imgDiv);
    div.appendChild(InfoDiv);
    main.appendChild(div);
=======
    const infoDiv = document.createElement("div");
    infoDiv.className = "item-list__info";

    const infoTitleDiv = document.createElement("div");
    infoTitleDiv.className = "item-list__info-title";
    infoTitleDiv.innerText = obj.title;

    const infoMetaDiv = document.createElement("div");
    infoMetaDiv.className = "item-list__info-meta";
    infoMetaDiv.innerText = obj.place + "·" + calcTime(obj.insertAt);

    const infoPriceDiv = document.createElement("div");
    infoPriceDiv.className = "item-list__info-price";
    infoPriceDiv.innerText = obj.price;

    imgDiv.appendChild(img);

    infoDiv.appendChild(infoTitleDiv);
    infoDiv.appendChild(infoMetaDiv);
    infoDiv.appendChild(infoPriceDiv);

    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(infoDiv);
    main.appendChild(itemDiv);
>>>>>>> Stashed changes
  });
};

const fetchList = async () => {
<<<<<<< Updated upstream
  const res = await fetch("/items");
=======
  const accessToken = window.localStorage.getItem("token");
  const res = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (res.status === 401) {
    alert("로그인이 필요합니다.");
    window.location.pathname = "/login.html";
    return;
  }
>>>>>>> Stashed changes
  const data = await res.json();
  renderData(data);
};

fetchList();
