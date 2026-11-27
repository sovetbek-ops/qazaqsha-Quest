const lessons = [
  { id: "greetings", title: "Приветствия", level: "Начальный" },
  { id: "colors", title: "Цвета", level: "Начальный" },
  { id: "numbers", title: "Числа", level: "Начальный" },
];

function renderLessons(lessonData) {
  const list = document.getElementById("lesson-list");
  const emptyMessage = document.getElementById("lessons-empty");
  const cards = document.createDocumentFragment();

  for (const lesson of lessonData) {
    const card = document.createElement("li");
    card.className = "lesson-card";
    card.dataset.lessonId = lesson.id;

    const title = document.createElement("h3");
    title.textContent = lesson.title?.trim() || "Урок без названия";

    const level = document.createElement("p");
    const levelName = lesson.level?.trim();
    level.textContent = levelName
      ? `Сложность: ${levelName}`
      : "Сложность не указана";

    card.append(title, level);
    cards.append(card);
  }

  list.replaceChildren(cards);
  list.hidden = lessonData.length === 0;
  emptyMessage.hidden = lessonData.length !== 0;
}

renderLessons(lessons);
