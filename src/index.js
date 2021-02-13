const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

/*Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.*/
/*⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.*/
/*Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.*/
/*const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };
 */
const bodyRef = document.querySelector("body");
const startBynRef = document.querySelector("[data-action='start']");
const stopBynRef = document.querySelector("[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBynRef.addEventListener("click", () => {
  const timerId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

    bodyRef.setAttribute("style", `background-color:${randomColor}`);
  }, 1000);
});

stopBynRef.addEventListener("click", () => {
  clearInterval(timerId);
});
