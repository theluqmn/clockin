function updateTime() {
    var format = "24";

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000); // update every second
updateTime();