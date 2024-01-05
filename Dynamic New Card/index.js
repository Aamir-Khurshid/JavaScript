let card = document.querySelector(".container");

function createCard(title, cName, views, months, duration, thumbnail) {
  let thumb = document.createElement("img");
  thumb.src = thumbnail;
  thumb.classList.add("photo");
  card.prepend(thumb);

  let dura = document.createElement("span");
  dura.innerText = duration;
  dura.classList.add("dur", "opacit");
  thumb.insertAdjacentElement("afterend", dura);

  let description = document.createElement("div");
  card.append(description);
  let titlee = document.createElement("p");
  titlee.innerText = title;
  titlee.classList.add("titl");
  description.append(titlee);

  let name = document.createElement("p");
  name.innerText = cName;
  name.classList.add("pos");
  description.append(name);

  let view = document.createElement("p");
  view.innerText = `${viewCount(views)} views`;
  view.classList.add("pos");
  description.append(view);

  let month = document.createElement("p");
  month.innerText = `${months} months ago`;
  month.classList.add("pos");
  description.append(month);
}
function viewCount(views) {
  if (views > 1000 && views < 1000000) {
    views = (views / 1000).toFixed();
    return `${views}K`;
  } else if (views > 1000000 && views < 1000000000) {
    views = (views / 1000000).toFixed(1);
    return `${views}M`;
  } else {
    return views;
  }
}
createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB19wZ1Xom2N5iWreyZPUh7UXs2gA"
);
