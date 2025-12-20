const username = document.getElementById("username");
const remember = document.getElementById("remember");
const loginBtn = document.getElementById("loginBtn");

window.onload = () => {
  const saved = localStorage.getItem("lena_user");
  if (saved) {
    username.value = saved;
    remember.checked = true;
  }
};

loginBtn.onclick = () => {
  if (!username.value) return;

  if (remember.checked) {
    localStorage.setItem("lena_user", username.value);
  } else {
    localStorage.removeItem("lena_user");
  }

  // Minecraft.jar yolu (burayı kendi jar dosyana göre değiştir)
  const minecraftJarPath = "C:\\Minecraft\\minecraft.jar";

  window.windowControls.launchMinecraft(minecraftJarPath);
};
