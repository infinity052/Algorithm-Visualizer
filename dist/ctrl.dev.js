"use strict";

var objects = [],
    btn_press = false;
window.addEventListener('load', randomize);

function sort(type) {
  return regeneratorRuntime.async(function sort$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!btn_press) {
            _context.next = 3;
            break;
          }

          alert("Awesome sorting in progress. Please wait and observe");
          return _context.abrupt("return");

        case 3:
          btn_press = true;
          _context.t0 = type;
          _context.next = _context.t0 === 0 ? 7 : _context.t0 === 1 ? 10 : _context.t0 === 2 ? 13 : _context.t0 === 3 ? 16 : _context.t0 === 4 ? 19 : _context.t0 === 5 ? 22 : 25;
          break;

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bubbleSort());

        case 9:
          return _context.abrupt("break", 28);

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(insertionSort());

        case 12:
          return _context.abrupt("break", 28);

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(mergeSort());

        case 15:
          return _context.abrupt("break", 28);

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(selectionSort());

        case 18:
          return _context.abrupt("break", 28);

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(quickSort());

        case 21:
          return _context.abrupt("break", 28);

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(heapSort());

        case 24:
          return _context.abrupt("break", 28);

        case 25:
          _context.next = 27;
          return regeneratorRuntime.awrap(randomize());

        case 27:
          return _context.abrupt("break", 28);

        case 28:
          btn_press = false;

        case 29:
        case "end":
          return _context.stop();
      }
    }
  });
}

function randomize() {
  var arr, area, i, bar, attr;
  return regeneratorRuntime.async(function randomize$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          arr = [];
          objects = [];
          area = document.querySelector("#bars");
          area.innerHTML = "";

          for (i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 100 + 1));
          }

          for (i = 0; i < 10; i++) {
            bar = document.createElement("div");
            bar.className = "bar";
            attr = document.createAttribute("style");
            attr.value = "height: " + arr[i] * 3 + "px; background: white;";
            bar.setAttributeNode(attr);
            area.appendChild(bar);
            objects.push(bar);
          }

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}