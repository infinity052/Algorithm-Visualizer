"use strict";

function swap(i, j) {
  var temp;
  return regeneratorRuntime.async(function swap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          temp = objects[i].style.height;
          objects[i].style.height = objects[j].style.height;
          objects[j].style.height = temp;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function height(i) {
  var s;
  return regeneratorRuntime.async(function height$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          s = objects[i].style.height;
          return _context2.abrupt("return", parseInt(s.slice(0, s.length - 2)));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function assign(src, dest, assign_to) {
  return regeneratorRuntime.async(function assign$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = assign_to;
          _context3.next = _context3.t0 === "index" ? 3 : _context3.t0 === "height" ? 5 : _context3.t0 === "object" ? 7 : 9;
          break;

        case 3:
          objects[dest].style.height = objects[src].style.height;
          return _context3.abrupt("break", 10);

        case 5:
          objects[dest].style.height = src + "px";
          return _context3.abrupt("break", 10);

        case 7:
          objects[dest].style.height = src.style.height;
          return _context3.abrupt("break", 10);

        case 9:
          return _context3.abrupt("return");

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}