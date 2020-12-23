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
const RenderLocation = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMain = document.querySelector(`.trip-main`);
render(tripMain, createTripInfoTemplate(), RenderLocation.AFTERBEGIN);

const tripInfo = tripMain.querySelector(`.trip-info`);
render(tripInfo, createTitleDateTemplate(), RenderLocation.BEFOREEND);
render(tripInfo, createCostTemplate(), RenderLocation.BEFOREEND);

const tripControls = tripMain.querySelector(`.trip-main__trip-controls`);
const tripControlsTitles = tripControls.querySelectorAll(`.visually-hidden`);
render(tripControlsTitles[0], createMenuTemplate(), RenderLocation.AFTEREND);
render(tripControlsTitles[1], createFilterTemplate(), RenderLocation.AFTEREND);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createSortTemplate(), RenderLocation.BEFOREEND);
render(tripEvents, createEventListTemplate(), RenderLocation.BEFOREEND);

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripEventsList, createPointTemplate(), RenderLocation.BEFOREEND);
}

const tripEventsItems = tripEventsList.querySelectorAll(`.trip-events__item`);
render(tripEventsItems[0], createEditEventTemplate(), RenderLocation.AFTEREND);

render(tripEventsList, createAddEventTemplate(), RenderLocation.AFTERBEGIN);

