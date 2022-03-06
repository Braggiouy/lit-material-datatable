/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable dot-notation */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-duplicates */
import { html, LitElement, css } from 'lit-element';
import { property } from 'lit/decorators.js';

export class LitMaterialDatatable extends LitElement {
  static override styles = css`
    :host {
      --google-blue-color: #2194f3;
      --google-red-color: #db4437;
      --google-yellow-color: #f4b400;
      --google-green-color: #0f9d58;
      --google-white-color: #ffffff;
      --google-black-color: #000000;
      --google-grey-color: #d2d2d2;
      --google-light-grey-color: #f1f1f1;

      --dt-padding: 16px;
      --dt-padding-s: 6px;
      --dt-padding-xs: 2px;

      --dt-border-radius: 3px;

      --dt-background-color-container: var(--google-white-color);
      --dt-border-color: var(--google-black-color);
      --dt-bg-color-: var(--google-black-color);
      --dt-text-color: var(--google-black-color);
      --dt-bg-active-color: var(--google-blue-color);
      --dt-text-color-button: var(--google-black-color);
      --dt-text-color-active-button: var(--google-white-color);
      --dt-hover-cell-color: var(--google-grey-color);
      --dt-even-row-color: var(--google-light-grey-color);
      --dt-focus-color: var(--google-black-color);
      --dt-input-background-color: var(--google-black-color);
      --dt-input-color: var(--google-black-color);
    }

    mwc-button.reTransCodeButton {
      --mdc-theme-primary: var(--google-blue-color);
      --mdc-theme-on-primary: var(--google-white-color);
    }

    mwc-button.infoButton {
      --mdc-theme-primary: var(--google-blue-color);
      --mdc-button-outline-color: var(--google-blue-color);
    }

    span.noValue {
      color: var(--google-red-color);
      font-weight: bold;
    }

    .datatable-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: var(--dt-background-color-container);
      border-radius: var(--dt-border-radius);
      color: var(--dt-black-color);
      margin: 0 auto;
      font-size: 16px;
      padding: 0px 32px;
    }

    .datatable-container .datatable-header {
      /* border-bottom: solid 1px var(--dt-border-color); */
      padding: var(--dt-padding);
      display: flex;
      align-items: baseline;
    }

    .datatable-container .datatable-header .datatable-search {
      width: 30%;
    }

    .datatable-container .datatable-footer {
      padding: var(--dt-padding);
      display: flex;
      align-items: baseline;
    }

    .datatable-container .datatable-footer .list-items {
      width: 50%;
    }

    .datatable-container .datatable-footer .pages {
      margin-left: auto;
      margin-right: 0;
      width: 50%;
    }

    .datatable-container .datatable-footer .pages ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
    }

    .datatable-container .datatable-footer .pages ul li {
      display: inline-block;
      margin: 0 var(--dt-padding-xs);
    }

    .datatable-container .datatable-header .pages ul li button,
    .datatable-container .datatable-footer .pages ul li button {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: var(--dt-background-color-container);
      color: var(--dt-text-color-button);
      width: 100%;
      box-sizing: border-box;
      border: 0;
      border-radius: var(--dt-border-radius);
      cursor: pointer;
    }

    .datatable-container .datatable-header .pages ul li button:hover,
    .datatable-container .datatable-footer .pages ul li button:hover {
      background: var(--dt-bg-active-color);
      color: var(--dt-text-color-active-button);
    }

    .datatable-container .datatable-footer .pages ul li button.active {
      background-color: var(--dt-bg-active-color);
      color: var(--dt-text-color-active-button);
      border-radius: var(--dt-border-radius);
    }

    .datatable-container .datatable-header .tools ul li button,
    .datatable-container .datatable-footer .pages ul li button {
      padding: var(--dt-padding-s) var(--dt-padding);
    }

    .datatable-container .datatable {
      border-collapse: collapse;
      width: 100%;
    }

    .datatable-container .datatable,
    .datatable-container .datatable th,
    .datatable-container .datatable td {
      padding: var(--dt-padding) var(--dt-padding);
    }

    .datatable-container .datatable th {
      font-weight: bolder;
      text-align: left;
      border-bottom: solid 1px var(--dt-border-color);
    }

    /* .datatable-container .datatable td {
      border-bottom: solid 1px var(--dt-border-color);
    } */

    .datatable-container .datatable tbody tr:nth-child(even) {
      background-color: var(--dt-even-row-color);
    }

    .datatable-container .datatable tbody tr:hover {
      background-color: var(--dt-hover-cell-color);
    }
  `;

  /**
   * @property Headers
   * should be an array of Strings.
   */
  @property({ type: Array }) headers = [] as any;

  /**
   * @property Data
   * hould always be an array, with object as Items.
   * Amount if values inside items should match amount of Header titles.
   */
  @property({ type: Array }) data = [];

  @property({ type: Object }) pagination = {
    totalItems: Number,
    noItemsPerPage: Number,
    totalPages: Number,
  } as any;

  /**
   * @property entriesPerPage
   * Amout of Items to be displayed on each Page of the table
   */
  @property({ type: Number }) entriesPerPage = 5;

  @property({ type: Number }) actualPage = 1;

  firstUpdated() {}

  updated() {}

  render() {
    return html`
      <div class="datatable-container">
        <!-- Header -->
        <div class="datatable-header">
          <div class="datatable-search">
            <material-input
              label="Video Ingest Management Filter Box"
              type="text"
              value=""
              helper="Filter by Any Column"
              @val-change="${this.valueChanged}"
            ></material-input>
          </div>
        </div>
        <!-- Table Body -->
        <table id="datatable" class="datatable">
          <!-- Table head -->
          <thead>
            <tr>
              ${this.headers?.map(
                (headerTitle: any) =>
                  html`<th
                    @click=${this.headerClicked}
                    data-order="desc"
                    .id="${headerTitle.id}"
                  >
                    ${headerTitle.name}
                    <span class="orderDirection ${headerTitle.id}"></span>
                  </th> `
              )}
            </tr>
          </thead>

          <!-- Table body -->
          <tbody id="datatable-body">
            ${this.data && this.data.length > 0 ? this.populateTable() : null}
          </tbody>
        </table>
        <!-- Table Footer -->
        <div class="datatable-footer">
          <div class="pages">
            <ul class="ulPagesList"></ul>
          </div>
        </div>
      </div>
    `;
  }

  populateTable() {
    const trimStart = (this.actualPage - 1) * this.entriesPerPage;
    const trimEnd = trimStart + this.entriesPerPage;

    const trimedData = this.data.slice(trimStart, trimEnd);
    this.pagination.totalPages = Math.ceil(
      this.data.length / this.entriesPerPage
    );

    this.populatePages(this.pagination.totalPages);

    return trimedData.map(
      dataRow => html`<tr>
        ${Object.entries(dataRow).map(
          ([key, value]) => html`<td>${value}</td>`
        )}
      </tr>`
    );
  }

  populatePages(totalPages: any) {
    const ulPagesList = this.shadowRoot?.querySelector('.ulPagesList');

    while (ulPagesList?.firstChild) {
      ulPagesList.removeChild(ulPagesList.firstChild);
    }

    for (let i = 0; i < totalPages; i += 1) {
      const li = document.createElement('li');
      const button = document.createElement('button');

      li.appendChild(button);
      button.innerText = `${i + 1}`;

      button.addEventListener('click', () => {
        this.actualPage = parseInt(button.innerText, 10);
      });

      ulPagesList?.appendChild(li);

      if (this.actualPage === parseInt(button.innerText, 10)) {
        button.className = 'active';
      }
    }
  }

  valueChanged(e: any) {
    const typedUpperCase = e.detail.value.toUpperCase(); // set value type, to upperCase for filter purpose.

    const datatable = this.shadowRoot?.getElementById('datatable-body');
    const allTR: any = datatable?.getElementsByTagName('tr'); // get each row from the table
    const allTRArray = [...allTR]; // transform a NODE array to a primitive array

    for (let i = 0; i < allTRArray.length; i += 1) {
      // loop every single row

      const td: any = allTRArray[i].getElementsByTagName('td'); // get every single cell from every row

      for (let j = 0; j < td.length; j += 1) {
        // loop every single row

        const tdInnerTextUpperCase = td[j].innerText.toUpperCase(); // get the innerText from each cell, and set it to upperCase for filter purpose

        if (tdInnerTextUpperCase.indexOf(typedUpperCase) > -1) {
          // if what was type is inside the cell, hide and show functionality
          allTRArray[i].style.display = '';
          break;
        } else {
          allTRArray[i].style.display = 'none';
        }
      }
    }
  }

  headerClicked(e: any) {
    // tableHeadDOM
    const thDOM: any = this.shadowRoot?.getElementById(e.target.id);
    const columnOrder: any = thDOM?.getAttribute('data-order');
    const columnName: any = thDOM?.getAttribute('id');
    const arrow = thDOM?.querySelector('.orderDirection');

    const allArrows = this.shadowRoot?.querySelectorAll('.orderDirection');

    allArrows?.forEach(elemen => {
      if (elemen.classList[1] !== e.target.id) {
        elemen.innerHTML = '';
      }
    });

    // Modify arrow direction

    if (columnOrder === 'desc') {
      thDOM?.setAttribute('data-order', 'asc');
      arrow ? (arrow.innerHTML = '&#8595;') : null;

      this.data = this.data.sort((a, b) => {
        if (
          typeof a[columnName] === 'number' &&
          typeof b[columnName] === 'number'
        ) {
          return a[columnName] - b[columnName];
        }
        return a[columnName] > b[columnName] ? 1 : -1;
      });
    } else {
      thDOM?.setAttribute('data-order', 'desc');
      arrow ? (arrow.innerHTML = '&#8593;') : null;

      this.data = this.data.sort((a, b) => {
        if (
          typeof a[columnName] === 'number' &&
          typeof b[columnName] === 'number'
        ) {
          return b[columnName] - a[columnName];
        }

        return a[columnName] < b[columnName] ? 1 : -1;
      });
    }

    this.requestUpdate();
  }
}
