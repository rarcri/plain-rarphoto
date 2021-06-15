window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const submit = document.getElementById("submit");

  const img = document.getElementById("hidden-photo");

  // Setting canvas width and Height as img w/h
  canvas.width = img.width;
  canvas.height = img.height;

  canvas.style.width = img.width / 4;
  canvas.style.height = img.height / 4;

  ctx.drawImage(img, 0, 0);
};
