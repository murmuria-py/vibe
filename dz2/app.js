const sourceJson = `{
  "event": {
    "title": "Ночь в музее",
    "date": "15 ноября, 18:30",
    "place": "Музей космонавтики, проспект Мира, 111",
    "description": "Вечерняя программа с выставкой и экскурсиями",
    "meeting": "Сбор: 18:30. Начало: 19:00."
  },
  "services": [
    { "id": "guide", "title": "  Экскурсия с гидом  ", "price": 500 },
    { "id": "audio", "title": "Аудиогид", "price": 350 },
    { "id": "catalog", "title": "Каталог выставки", "price": 250 }
  ]
}`;

const showProgramBtn = document.querySelector('#show-program');
const program = document.querySelector('#program');
const form = document.querySelector('#service-form');
const guideCheckbox = document.querySelector('#guide');
const audioCheckbox = document.querySelector('#audio');
const catalogCheckbox = document.querySelector('#catalog');
const choiceError = document.querySelector('#choice-error');
const dataError = document.querySelector('#data-error');
const result = document.querySelector('#result');
const reportJson = document.querySelector('#report-json');

function buildReport(services, guideChecked, audioChecked, catalogChecked) {
  const flags = {
    guide: guideChecked,
    audio: audioChecked,
    catalog: catalogChecked
  };

  const selected = services.filter((service) => flags[service.id]);

  const items = selected.map(( { title, price } ) => ({ title: title.trim(), price }));

  const total = items.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return {
    count: selected.length,
    total: total,
    items: items
  };
}

let data;

try {
   data = JSON.parse(sourceJson)
} catch (e) {
  dataError.hidden = false;
  form.hidden = true;
}
if (data) {
  form.hidden = false

showProgramBtn.addEventListener('click', () => {
  program.hidden = false;
  program.innerHTML = data.event.meeting;
});

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const guideChecked = guideCheckbox.checked;
  const audioChecked = audioCheckbox.checked;
  const catalogChecked = catalogCheckbox.checked;

  const report = buildReport(data.services, guideChecked, audioChecked, catalogChecked);

  if (report.count === 0) {
    choiceError.hidden = false;
    result.hidden = true;
    reportJson.hidden = true;
  } else {
    choiceError.hidden = true;
    result.hidden = false;
    reportJson.hidden = false;

    result.innerHTML = `Выбрано услуг: ${report.count}<br>Итого: ${report.total} руб.<br>${report.items.map(item => item.title).join('<br>')}`;

    const jsonStr = JSON.stringify(report);
    JSON.parse(jsonStr);
    reportJson.textContent = jsonStr;
  }
});
}
