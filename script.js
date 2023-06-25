dayjs.extend(dayjs_plugin_timezone);
dayjs.extend(dayjs_plugin_utc);

MicroModal.init();

var currentTz = dayjs.tz.guess();

// Функция для обновления времени и даты
function updateTime() {
  var timezoneElement = document.querySelector(".timezone");
  timezoneElement.textContent = currentTz;

  var timeElement = document.querySelector(".time");
  var currentTime = dayjs().tz(currentTz).format("HH:mm:ss");
  timeElement.textContent = currentTime;

  var dateElement = document.querySelector(".date");
  var currentDate = dayjs().format("dddd, D MMMM, YYYY");
  dateElement.textContent = currentDate;
}

// Функция для изменения часового пояса
function changeTimezone(timezone) {
  dayjs.tz.setDefault(timezone);
  currentTz = timezone;
  updateTime();
}

// Обработчик события при нажатии на кнопку "Continue"
document.getElementById("continue-btn").addEventListener("click", function () {
  var timezoneSelecter = document.getElementById("timezone-selecter");
  var selectedTimezone = timezoneSelecter.value;
  if (selectedTimezone) {
    changeTimezone(selectedTimezone);
    MicroModal.close("modal-1");
  }
});

updateTime();
setInterval(updateTime, 1000);
