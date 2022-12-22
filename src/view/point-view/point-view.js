import View from '../view';
import { html } from '../../utils';
import './point-view.css';

export default class PointView extends View {
  /**
 * @param {PointViewState} state
 */
  constructor(state) {
    super(state);

    this.classList.add('trip-events__item');
  }

  /**
   * @override
   * @param {PointViewState} state
   */
  createHtml(state) {
    return html`
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${state.date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${state.icon}" alt="Event type icon">
        </div>
        <h3 class="event__title">${state.title}</h3>
        <div class="event__schedule">
          <p class="event__time">
          <time class="event__start-time" datetime="${state.startDate}">${state.startTime}</time>
            —
          <time class="event__end-time" datetime="${state.startDate}">${state.endTime}</time>
          </p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${state.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Rent a car</span>
            +€&nbsp;
            <span class="event__offer-price">200</span>
          </li>
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    `;
  }
}

customElements.define(String(PointView), PointView);
