import moment from "moment";
import store from "../../redux/store";
import { getNews } from "../../redux/newsSlice";

export const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

export const getUploadedFile = (event, image) => {
  const target = event.target;
  const [file] = target.files;
  const imageUrl = URL.createObjectURL(file);

  image.src = imageUrl;
};

export const toLocale = (str, locale, currency) => {
  const options = currency && {
    style: "currency",
    currency,
  };

  return parseFloat(str).toLocaleString(locale, options);
};

export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Date(date).toLocaleDateString("en-Us", options);
};

export const truncateString = (str, number) => {
  if (str.length > number) {
    return str.slice(0, number) + "...";
  }
};

export const randomObject = (array) => {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
};

export const increaseResolution = async (image) => {
  return image;
};

export const encodeEndpoint = (endpoint) => {
  return encodeURIComponent(decodeURIComponent(endpoint));
};

export const compareTime = (updated) => {
  const diff = moment(updated).fromNow();

  return diff;
};

export class Paginate {
  constructor(wrapper, element, current, pageSize, total, route) {
    /**
     * @param {wrapper: node}
     * @param {element: node}
     * @param {current: number}
     * @param {pageSize: number}
     * @param {total: number}
     * @param {route: object}
     * @returns {void}
     */
    // TODO: * next and prev will add
    // TODO: * when element clicked paginate to matching page-- > current will change but it is not here
    // TODO: * total is static
    // TODO: * push route with this.route.push()
    // TODO: * add active class to current element and remove from others.
    // TODO: * set ellipsis to some items --> current and 3 siblins will be seen together with first and last items
    // ex: [prev] 1 ... 3 4 5 ... 323 [next]

    this.wrapper = wrapper;
    this.current = current;
    this.element = element && element;
    this.target = this.element && parseFloat(this.element.dataset["target"]);
    this.total = total;
    this.pageSize = pageSize;
    this.route = route;
    this.number_of_pages = parseFloat(this.total / this.pageSize).toFixed();
    this.paginateItems = this.wrapper.children;
  }

  init() {
    store.dispatch(getNews(this.target)); //state page updated
    this.route.push(`?page=${this.target}`);
    this.addActive();
    this.removeActive();
    new Truncate(this.wrapper, this.element);
  }

  addActive() {
    this.element.classList.add("active");
  }

  removeActive() {
    [...this.paginateItems].forEach((item) => {
      if (item !== this.element && item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  }
}

export class Truncate extends Paginate {
  constructor(wrapper, element) {
    super(wrapper, element);
    this.truncatePagination();
  }

  truncatePagination() {
    const prevSibling = this.element.previousElementSibling;
    const nextSibling = this.element.nextElementSibling;
    const paginationItems = [...this.paginateItems];
    const paginationLength = this.paginateItems.length;
    const startPoint = paginationItems[1];
    const endPoint = paginationItems[paginationLength - 2];
    const alwaysDisplay = [prevSibling, nextSibling, startPoint, endPoint];
    const set = new Set(alwaysDisplay);
    const difference = paginationItems.filter((item) => !set.has(item));

    difference.forEach((d) => d.classList.add("hide"));
    this.removeHideFromSibling(prevSibling, nextSibling);
    prevSibling !== startPoint &&
      this.wrapper.insertBefore(this.truncatedItem(), prevSibling);
    nextSibling !== endPoint.previousElementSibling ||
      nextSibling.insertAdjacentElement("afterend", this.truncatedItem());
    console.log(alwaysDisplay);
  }

  truncatedItem() {
    let li = document.createElement("li");
    li.className = "pagination-wrapper-item truncate";

    return li;
  }

  removeHideFromSibling(prev, next) {
    const siblings = [prev, next];
    siblings.forEach(sibling => {
      console.log(sibling);
      if (sibling.classList.contains('hide')) {
        sibling.classList.remove('hide');
      }
    })
  }
}

export const isEqual = function (value, other) {
  // Get the value type
  let type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  let valueLen =
    type === "[object Array]" ? value.length : Object.keys(value).length;
  let otherLen =
    type === "[object Array]" ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  let compare = function (item1, item2) {
    // Get the object type
    let itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === "[object Array]") {
    for (let i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
};
