"use strict";

function bubbleSort() {
  var n, i, end, isSorted, j;
  return regeneratorRuntime.async(function bubbleSort$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          n = objects.length, i = 0, end = n - 1;

        case 1:
          if (!(i < n - 1)) {
            _context.next = 44;
            break;
          }

          isSorted = true, j = 0;

        case 3:
          if (!(j < n - i - 1)) {
            _context.next = 27;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(iterator.addIterator(j, 0));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(sleep(100));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(height(j));

        case 10:
          _context.t0 = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(height(j + 1));

        case 13:
          _context.t1 = _context.sent;

          if (!(_context.t0 > _context.t1)) {
            _context.next = 20;
            break;
          }

          _context.next = 17;
          return regeneratorRuntime.awrap(swap(j, j + 1));

        case 17:
          isSorted = false;
          _context.next = 20;
          return regeneratorRuntime.awrap(sleep(100));

        case 20:
          _context.next = 22;
          return regeneratorRuntime.awrap(sleep(50));

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(iterator.removeIterator(j));

        case 24:
          j++;
          _context.next = 3;
          break;

        case 27:
          if (!isSorted) {
            _context.next = 38;
            break;
          }

          if (!(end < n - 1)) {
            _context.next = 37;
            break;
          }

        case 29:
          if (!(end > 0)) {
            _context.next = 37;
            break;
          }

          _context.next = 32;
          return regeneratorRuntime.awrap(iterator.addIterator(end, 1));

        case 32:
          _context.next = 34;
          return regeneratorRuntime.awrap(sleep(30));

        case 34:
          end--;
          _context.next = 29;
          break;

        case 37:
          return _context.abrupt("break", 44);

        case 38:
          _context.next = 40;
          return regeneratorRuntime.awrap(iterator.addIterator(end, 1));

        case 40:
          end--;

        case 41:
          i++;
          _context.next = 1;
          break;

        case 44:
          _context.next = 46;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 46:
        case "end":
          return _context.stop();
      }
    }
  });
}

function insertionSort() {
  var n, i, key, j;
  return regeneratorRuntime.async(function insertionSort$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          n = objects.length;
          i = 1;

        case 2:
          if (!(i < n)) {
            _context2.next = 43;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(iterator.addIterator(i, 0));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(sleep(50));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(height(i));

        case 9:
          key = _context2.sent;
          j = i - 1;

        case 11:
          _context2.t0 = j >= 0;

          if (!_context2.t0) {
            _context2.next = 18;
            break;
          }

          _context2.next = 15;
          return regeneratorRuntime.awrap(height(j));

        case 15:
          _context2.t1 = _context2.sent;
          _context2.t2 = key;
          _context2.t0 = _context2.t1 > _context2.t2;

        case 18:
          if (!_context2.t0) {
            _context2.next = 26;
            break;
          }

          _context2.next = 21;
          return regeneratorRuntime.awrap(assign(j, j + 1, "index"));

        case 21:
          j--;
          _context2.next = 24;
          return regeneratorRuntime.awrap(sleep(10));

        case 24:
          _context2.next = 11;
          break;

        case 26:
          _context2.next = 28;
          return regeneratorRuntime.awrap(iterator.addIterator(j + 1, 1));

        case 28:
          _context2.next = 30;
          return regeneratorRuntime.awrap(sleep(150));

        case 30:
          _context2.next = 32;
          return regeneratorRuntime.awrap(assign(key, j + 1, "height"));

        case 32:
          _context2.next = 34;
          return regeneratorRuntime.awrap(sleep(150));

        case 34:
          _context2.next = 36;
          return regeneratorRuntime.awrap(iterator.removeIterator(j + 1));

        case 36:
          _context2.next = 38;
          return regeneratorRuntime.awrap(iterator.removeIterator(i));

        case 38:
          _context2.next = 40;
          return regeneratorRuntime.awrap(sleep(30));

        case 40:
          i++;
          _context2.next = 2;
          break;

        case 43:
          _context2.next = 45;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 45:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function mergeSort() {
  var merge_sort, merge, start, end;
  return regeneratorRuntime.async(function mergeSort$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          merge = function _ref2(start, end) {
            var mid, temp, i, j, height_i, height_j;
            return regeneratorRuntime.async(function merge$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    mid = parseInt(start + (end - start) / 2);
                    temp = [];
                    i = start, j = mid + 1;

                  case 3:
                    if (!(i <= mid && j <= end)) {
                      _context4.next = 13;
                      break;
                    }

                    _context4.next = 6;
                    return regeneratorRuntime.awrap(height(i));

                  case 6:
                    height_i = _context4.sent;
                    _context4.next = 9;
                    return regeneratorRuntime.awrap(height(j));

                  case 9:
                    height_j = _context4.sent;

                    if (height_i < height_j) {
                      temp.push(height_i);
                      i++;
                    } else {
                      temp.push(height_j);
                      j++;
                    }

                    _context4.next = 3;
                    break;

                  case 13:
                    if (!(i <= mid)) {
                      _context4.next = 22;
                      break;
                    }

                    _context4.t0 = temp;
                    _context4.next = 17;
                    return regeneratorRuntime.awrap(height(i));

                  case 17:
                    _context4.t1 = _context4.sent;

                    _context4.t0.push.call(_context4.t0, _context4.t1);

                    i++;
                    _context4.next = 13;
                    break;

                  case 22:
                    if (!(j <= end)) {
                      _context4.next = 31;
                      break;
                    }

                    _context4.t2 = temp;
                    _context4.next = 26;
                    return regeneratorRuntime.awrap(height(j));

                  case 26:
                    _context4.t3 = _context4.sent;

                    _context4.t2.push.call(_context4.t2, _context4.t3);

                    j++;
                    _context4.next = 22;
                    break;

                  case 31:
                    i = start, k = 0;

                  case 32:
                    if (!(i <= end)) {
                      _context4.next = 43;
                      break;
                    }

                    _context4.next = 35;
                    return regeneratorRuntime.awrap(assign(temp[k], i, "height"));

                  case 35:
                    if (!(i != start && i != end)) {
                      _context4.next = 38;
                      break;
                    }

                    _context4.next = 38;
                    return regeneratorRuntime.awrap(iterator.addIterator(i, 1));

                  case 38:
                    _context4.next = 40;
                    return regeneratorRuntime.awrap(sleep(100));

                  case 40:
                    i++, k++;
                    _context4.next = 32;
                    break;

                  case 43:
                    i = start + 1;

                  case 44:
                    if (!(i < end)) {
                      _context4.next = 50;
                      break;
                    }

                    _context4.next = 47;
                    return regeneratorRuntime.awrap(iterator.removeIterator(i));

                  case 47:
                    i++;
                    _context4.next = 44;
                    break;

                  case 50:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          };

          merge_sort = function _ref(start, end) {
            var mid;
            return regeneratorRuntime.async(function merge_sort$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(start >= end)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    mid = parseInt(start + (end - start) / 2);
                    _context3.next = 5;
                    return regeneratorRuntime.awrap(merge_sort(start, mid));

                  case 5:
                    _context3.next = 7;
                    return regeneratorRuntime.awrap(merge_sort(mid + 1, end));

                  case 7:
                    _context3.next = 9;
                    return regeneratorRuntime.awrap(iterator.addIterator(start, 0));

                  case 9:
                    _context3.next = 11;
                    return regeneratorRuntime.awrap(iterator.addIterator(end, 0));

                  case 11:
                    _context3.next = 13;
                    return regeneratorRuntime.awrap(merge(start, end));

                  case 13:
                    _context3.next = 15;
                    return regeneratorRuntime.awrap(iterator.removeIterator(start));

                  case 15:
                    _context3.next = 17;
                    return regeneratorRuntime.awrap(iterator.removeIterator(end));

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          start = 0, end = objects.length - 1;
          _context5.next = 5;
          return regeneratorRuntime.awrap(merge_sort(start, end));

        case 5:
          _context5.next = 7;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function selectionSort() {
  var n, i, min, min_index, j;
  return regeneratorRuntime.async(function selectionSort$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          n = objects.length;
          i = 0;

        case 2:
          if (!(i < n - 1)) {
            _context6.next = 38;
            break;
          }

          _context6.next = 5;
          return regeneratorRuntime.awrap(height(i));

        case 5:
          min = _context6.sent;
          min_index = i;
          j = i + 1;

        case 8:
          if (!(j < n)) {
            _context6.next = 29;
            break;
          }

          _context6.next = 11;
          return regeneratorRuntime.awrap(iterator.addIterator(j, 0));

        case 11:
          _context6.next = 13;
          return regeneratorRuntime.awrap(sleep(30));

        case 13:
          _context6.next = 15;
          return regeneratorRuntime.awrap(height(j));

        case 15:
          _context6.t0 = _context6.sent;
          _context6.t1 = min;

          if (!(_context6.t0 < _context6.t1)) {
            _context6.next = 22;
            break;
          }

          _context6.next = 20;
          return regeneratorRuntime.awrap(height(j));

        case 20:
          min = _context6.sent;
          min_index = j;

        case 22:
          _context6.next = 24;
          return regeneratorRuntime.awrap(sleep(20));

        case 24:
          _context6.next = 26;
          return regeneratorRuntime.awrap(iterator.removeIterator(j));

        case 26:
          j++;
          _context6.next = 8;
          break;

        case 29:
          _context6.next = 31;
          return regeneratorRuntime.awrap(swap(min_index, i, "index"));

        case 31:
          _context6.next = 33;
          return regeneratorRuntime.awrap(iterator.addIterator(i, 1));

        case 33:
          _context6.next = 35;
          return regeneratorRuntime.awrap(sleep(70));

        case 35:
          i++;
          _context6.next = 2;
          break;

        case 38:
          _context6.next = 40;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 40:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function quickSort() {
  var quick_sort, start, end;
  return regeneratorRuntime.async(function quickSort$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          quick_sort = function _ref3(start, end) {
            var pivot, i, j, x;
            return regeneratorRuntime.async(function quick_sort$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(start >= end)) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 2:
                    _context7.next = 4;
                    return regeneratorRuntime.awrap(sleep(100));

                  case 4:
                    _context7.next = 6;
                    return regeneratorRuntime.awrap(iterator.addIterator(end, 2));

                  case 6:
                    _context7.next = 8;
                    return regeneratorRuntime.awrap(height(end));

                  case 8:
                    pivot = _context7.sent;
                    i = -1;
                    j = 0;

                  case 11:
                    if (!(j < end)) {
                      _context7.next = 35;
                      break;
                    }

                    _context7.next = 14;
                    return regeneratorRuntime.awrap(iterator.addIterator(j, 0));

                  case 14:
                    _context7.next = 16;
                    return regeneratorRuntime.awrap(sleep(100));

                  case 16:
                    _context7.next = 18;
                    return regeneratorRuntime.awrap(iterator.removeIterator(j));

                  case 18:
                    _context7.next = 20;
                    return regeneratorRuntime.awrap(sleep(50));

                  case 20:
                    _context7.next = 22;
                    return regeneratorRuntime.awrap(height(j));

                  case 22:
                    _context7.t0 = _context7.sent;
                    _context7.t1 = pivot;

                    if (!(_context7.t0 < _context7.t1)) {
                      _context7.next = 30;
                      break;
                    }

                    i++;
                    _context7.next = 28;
                    return regeneratorRuntime.awrap(swap(i, j));

                  case 28:
                    _context7.next = 30;
                    return regeneratorRuntime.awrap(iterator.addIterator(i, 1));

                  case 30:
                    _context7.next = 32;
                    return regeneratorRuntime.awrap(sleep(50));

                  case 32:
                    j++;
                    _context7.next = 11;
                    break;

                  case 35:
                    _context7.next = 37;
                    return regeneratorRuntime.awrap(swap(i + 1, end));

                  case 37:
                    _context7.next = 39;
                    return regeneratorRuntime.awrap(iterator.removeIterator(end));

                  case 39:
                    _context7.next = 41;
                    return regeneratorRuntime.awrap(sleep(20));

                  case 41:
                    _context7.next = 43;
                    return regeneratorRuntime.awrap(iterator.addIterator(i + 1));

                  case 43:
                    _context7.next = 45;
                    return regeneratorRuntime.awrap(sleep(20));

                  case 45:
                    x = 0;

                  case 46:
                    if (!(x <= i + 1)) {
                      _context7.next = 52;
                      break;
                    }

                    _context7.next = 49;
                    return regeneratorRuntime.awrap(iterator.removeIterator(x));

                  case 49:
                    x++;
                    _context7.next = 46;
                    break;

                  case 52:
                    _context7.next = 54;
                    return regeneratorRuntime.awrap(quick_sort(start, i));

                  case 54:
                    _context7.next = 56;
                    return regeneratorRuntime.awrap(quick_sort(i + 2, end));

                  case 56:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          };

          start = 0, end = parseInt(objects.length - 1);
          _context8.next = 4;
          return regeneratorRuntime.awrap(quick_sort(start, end));

        case 4:
          _context8.next = 6;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function heapSort() {
  var downHeapify, buildHeap, heap_sort;
  return regeneratorRuntime.async(function heapSort$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          heap_sort = function _ref6(start, end) {
            var i;
            return regeneratorRuntime.async(function heap_sort$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return regeneratorRuntime.awrap(buildHeap(end + 1));

                  case 2:
                    i = end;

                  case 3:
                    if (!(i >= 1)) {
                      _context11.next = 15;
                      break;
                    }

                    _context11.next = 6;
                    return regeneratorRuntime.awrap(sleep(30));

                  case 6:
                    _context11.next = 8;
                    return regeneratorRuntime.awrap(swap(0, i));

                  case 8:
                    _context11.next = 10;
                    return regeneratorRuntime.awrap(downHeapify(0, i));

                  case 10:
                    _context11.next = 12;
                    return regeneratorRuntime.awrap(iterator.addIterator(i, 2));

                  case 12:
                    i--;
                    _context11.next = 3;
                    break;

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          };

          buildHeap = function _ref5(n) {
            var start, i;
            return regeneratorRuntime.async(function buildHeap$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    start = parseInt(n) / 2 + 1;
                    i = start;

                  case 2:
                    if (!(i >= 0)) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 5;
                    return regeneratorRuntime.awrap(downHeapify(i, n));

                  case 5:
                    _context10.next = 7;
                    return regeneratorRuntime.awrap(sleep(10));

                  case 7:
                    i--;
                    _context10.next = 2;
                    break;

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          };

          downHeapify = function _ref4(parent, n) {
            var leftChild, rightChild, largestIndex;
            return regeneratorRuntime.async(function downHeapify$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return regeneratorRuntime.awrap(sleep(50));

                  case 2:
                    _context9.next = 4;
                    return regeneratorRuntime.awrap(iterator.addIterator(parent, 0));

                  case 4:
                    leftChild = parseInt(parent) * 2 + 1, rightChild = parseInt(parent) * 2 + 2;

                    if (!(leftChild < n)) {
                      _context9.next = 8;
                      break;
                    }

                    _context9.next = 8;
                    return regeneratorRuntime.awrap(iterator.addIterator(leftChild, 1));

                  case 8:
                    if (!(rightChild < n)) {
                      _context9.next = 11;
                      break;
                    }

                    _context9.next = 11;
                    return regeneratorRuntime.awrap(iterator.addIterator(rightChild, 1));

                  case 11:
                    if (!(leftChild >= n && rightChild >= n)) {
                      _context9.next = 13;
                      break;
                    }

                    return _context9.abrupt("return");

                  case 13:
                    largestIndex = parent;
                    _context9.t0 = leftChild < n;

                    if (!_context9.t0) {
                      _context9.next = 23;
                      break;
                    }

                    _context9.next = 18;
                    return regeneratorRuntime.awrap(height(leftChild));

                  case 18:
                    _context9.t1 = _context9.sent;
                    _context9.next = 21;
                    return regeneratorRuntime.awrap(height(largestIndex));

                  case 21:
                    _context9.t2 = _context9.sent;
                    _context9.t0 = _context9.t1 > _context9.t2;

                  case 23:
                    if (!_context9.t0) {
                      _context9.next = 25;
                      break;
                    }

                    largestIndex = leftChild;

                  case 25:
                    _context9.t3 = rightChild < n;

                    if (!_context9.t3) {
                      _context9.next = 34;
                      break;
                    }

                    _context9.next = 29;
                    return regeneratorRuntime.awrap(height(rightChild));

                  case 29:
                    _context9.t4 = _context9.sent;
                    _context9.next = 32;
                    return regeneratorRuntime.awrap(height(largestIndex));

                  case 32:
                    _context9.t5 = _context9.sent;
                    _context9.t3 = _context9.t4 > _context9.t5;

                  case 34:
                    if (!_context9.t3) {
                      _context9.next = 36;
                      break;
                    }

                    largestIndex = rightChild;

                  case 36:
                    if (!(parent != largestIndex)) {
                      _context9.next = 55;
                      break;
                    }

                    _context9.next = 39;
                    return regeneratorRuntime.awrap(sleep(40));

                  case 39:
                    _context9.next = 41;
                    return regeneratorRuntime.awrap(swap(largestIndex, parent));

                  case 41:
                    _context9.next = 43;
                    return regeneratorRuntime.awrap(iterator.addIterator(parent, 0));

                  case 43:
                    _context9.next = 45;
                    return regeneratorRuntime.awrap(iterator.addIterator(largestIndex, 1));

                  case 45:
                    _context9.next = 47;
                    return regeneratorRuntime.awrap(sleep(100));

                  case 47:
                    _context9.next = 49;
                    return regeneratorRuntime.awrap(iterator.removeIterator(parent));

                  case 49:
                    _context9.next = 51;
                    return regeneratorRuntime.awrap(iterator.removeIterator(rightChild));

                  case 51:
                    _context9.next = 53;
                    return regeneratorRuntime.awrap(iterator.removeIterator(leftChild));

                  case 53:
                    _context9.next = 55;
                    return regeneratorRuntime.awrap(downHeapify(largestIndex, n));

                  case 55:
                  case "end":
                    return _context9.stop();
                }
              }
            });
          };

          _context12.next = 5;
          return regeneratorRuntime.awrap(heap_sort(0, objects.length - 1));

        case 5:
          _context12.next = 7;
          return regeneratorRuntime.awrap(iterator.sortingEnd());

        case 7:
        case "end":
          return _context12.stop();
      }
    }
  });
}