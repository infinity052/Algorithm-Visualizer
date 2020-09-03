"use strict";

var iterator = {
  addIterator: function addIterator(i, color) {
    return regeneratorRuntime.async(function addIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (i >= 0 && i < objects.length) objects[i].style.background = iterator_colors[color];

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  removeIterator: function removeIterator(i) {
    return regeneratorRuntime.async(function removeIterator$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (i >= 0 && i < objects.length) objects[i].style.background = "white";

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  sortingEnd: function sortingEnd() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, obj, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _obj;

    return regeneratorRuntime.async(function sortingEnd$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context3.prev = 3;
            _iterator = objects[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context3.next = 13;
              break;
            }

            obj = _step.value;
            obj.style.background = iterator_colors[0];
            _context3.next = 10;
            return regeneratorRuntime.awrap(sleep(50));

          case 10:
            _iteratorNormalCompletion = true;
            _context3.next = 5;
            break;

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context3.t0;

          case 19:
            _context3.prev = 19;
            _context3.prev = 20;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 22:
            _context3.prev = 22;

            if (!_didIteratorError) {
              _context3.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context3.finish(22);

          case 26:
            return _context3.finish(19);

          case 27:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context3.prev = 30;
            _iterator2 = objects[Symbol.iterator]();

          case 32:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context3.next = 40;
              break;
            }

            _obj = _step2.value;
            _obj.style.background = "white";
            _context3.next = 37;
            return regeneratorRuntime.awrap(sleep(50));

          case 37:
            _iteratorNormalCompletion2 = true;
            _context3.next = 32;
            break;

          case 40:
            _context3.next = 46;
            break;

          case 42:
            _context3.prev = 42;
            _context3.t1 = _context3["catch"](30);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t1;

          case 46:
            _context3.prev = 46;
            _context3.prev = 47;

            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }

          case 49:
            _context3.prev = 49;

            if (!_didIteratorError2) {
              _context3.next = 52;
              break;
            }

            throw _iteratorError2;

          case 52:
            return _context3.finish(49);

          case 53:
            return _context3.finish(46);

          case 54:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[3, 15, 19, 27], [20,, 22, 26], [30, 42, 46, 54], [47,, 49, 53]]);
  }
};
var iterator_colors = ["blue", "red", "green"];