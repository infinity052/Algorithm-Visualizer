"use strict";

var objects = [],
    btn_press = false,
    type = -1,
    speed = 50;
window.addEventListener('load', randomize);
document.querySelector('#speed').onChange(console.log("g"));

function select(t) {
  if (type != -1) {
    document.querySelector("#btn-" + type).style.backgroundColor = "";
  }

  document.querySelector("#btn-" + t).style.backgroundColor = "#dc3545";
  type = t;
}

function sort() {
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
          _context.next = _context.t0 === -1 ? 7 : _context.t0 === 0 ? 9 : _context.t0 === 1 ? 12 : _context.t0 === 2 ? 15 : _context.t0 === 3 ? 18 : _context.t0 === 4 ? 21 : _context.t0 === 5 ? 24 : 27;
          break;

        case 7:
          alert("Please select a sort type");
          return _context.abrupt("break", 30);

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(bubbleSort());

        case 11:
          return _context.abrupt("break", 30);

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(insertionSort());

        case 14:
          return _context.abrupt("break", 30);

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(mergeSort());

        case 17:
          return _context.abrupt("break", 30);

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(selectionSort());

        case 20:
          return _context.abrupt("break", 30);

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(quickSort());

        case 23:
          return _context.abrupt("break", 30);

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(heapSort());

        case 26:
          return _context.abrupt("break", 30);

        case 27:
          _context.next = 29;
          return regeneratorRuntime.awrap(randomize());

        case 29:
          return _context.abrupt("break", 30);

        case 30:
          btn_press = false;

        case 31:
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
          if (!btn_press) {
            _context2.next = 3;
            break;
          }

          alert("Awesome sorting in progress. Please wait and observe");
          return _context2.abrupt("return");

        case 3:
          arr = [];
          objects = [];
          area = document.querySelector("#bars");
          area.innerHTML = "";

          for (i = 0; i < 50; i++) {
            arr.push(Math.floor(Math.random() * 100 + 1));
          }

          for (i = 0; i < 50; i++) {
            bar = document.createElement("div");
            bar.className = "bar";
            attr = document.createAttribute("style");
            attr.value = "height: " + arr[i] * 3 + "px; background-color: white;";
            bar.setAttributeNode(attr);
            area.appendChild(bar);
            objects.push(bar);
          }

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}