const lessons = [
  { id: "greetings", title: "Приветствия", level: "Начальный", progress: 0 },
  { id: "colors", title: "Цвета", level: "Начальный", progress: 0 },
  { id: "numbers", title: "Числа", level: "Начальный", progress: 0 },
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

    const progressText = document.createElement("p");
    const hasProgress = Number.isInteger(lesson.progress)
      && lesson.progress >= 0 && lesson.progress <= 100;
    progressText.textContent = hasProgress
      ? `Прогресс: ${lesson.progress}%`
      : "Прогресс пока неизвестен";
    card.append(progressText);

    if (hasProgress) {
      const progress = document.createElement("progress");
      progress.className = "lesson-progress";
      progress.max = 100;
      progress.value = lesson.progress;
      progress.setAttribute("aria-label", `Прогресс урока «${title.textContent}»`);
      card.append(progress);
    }

    cards.append(card);
  }

  list.replaceChildren(cards);
  list.hidden = lessonData.length === 0;
  emptyMessage.hidden = lessonData.length !== 0;
}

renderLessons(lessons);
