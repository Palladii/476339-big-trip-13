import {createTripInfoTemplate} from "./view/trip-info.js";
import {createTitleDateTemplate} from "./view/title-date.js";
import {createCostTemplate} from "./view/cost.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createEventListTemplate} from "./view/event-list.js";
import {createPointTemplate} from "./view/point.js";
import {createAddEventTemplate} from "./view/add-event.js";
import {createEditEventTemplate} from "./view/edit-event.js";

const POINT_COUNT = 3;

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

const tripMain = document.querySelector(`.trip-main`);
render(tripMain, createTripInfoTemplate(), `afterbegin`);

const tripInfo = tripMain.querySelector(`.trip-info`);
render(tripInfo, createTitleDateTemplate(), `beforeend`);
render(tripInfo, createCostTemplate(), `beforeend`);

const tripControls = tripMain.querySelector(`.trip-main__trip-controls`);
const tripControlsTitles = tripControls.querySelectorAll(`.visually-hidden`);
render(tripControlsTitles[0], createMenuTemplate(), `afterend`);
render(tripControlsTitles[1], createFilterTemplate(), `afterend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createEventListTemplate(), `beforeend`);

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripEventsList, createPointTemplate(), `beforeend`);
}

const tripEventsItems = tripEventsList.querySelectorAll(`.trip-events__item`);
render(tripEventsItems[0], createEditEventTemplate(), `afterend`);

render(tripEventsList, createAddEventTemplate(), `afterbegin`);

