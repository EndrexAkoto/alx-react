"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _notifications = _interopRequireWildcard(require("./notifications"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('testing getAllNotificationsByUser', function () {
  it('returns the right result', function () {
    var data = [{
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }, {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }];
    result = (0, _notifications["default"])('5debd764a7c57c7839d722e9');
    expect(result).toEqual(expect.arrayContaining(data));
  });
  it('has the correct result array', function () {
    var resultArray = ["5debd76480edafc8af244228", "5debd764507712e7a1307303", "5debd76444dd4dafea89d53b", "5debd76485ee4dfd1284f97b", "5debd7644e561e022d66e61a", "5debd7644aaed86c97bf9d5e", "5debd76413f0d5e5429c28a0", "5debd7642e815cd350407777", "5debd764c1127bc5a490a4d0", "5debd7646ef31e0861ec1cab", "5debd764a4f11eabef05a81d", "5debd764af0fdd1fc815ad9b", "5debd76468cb5b277fd125f4", "5debd764de9fa684468cdc0b"];
    expect(_notifications.normalizedData.result).toEqual(resultArray);
  });
  it('has a correct user entity', function () {
    var user = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders"
      },
      picture: "http://placehold.it/32x32"
    };
    expect(_notifications.normalizedData.entities.user["5debd764a7c57c7839d722e9"]).toEqual(user);
  });
  it('has the correct message entity', function () {
    var msg = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    };
    expect(_notifications.normalizedData.entities.messaages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"]).toEqual(msg);
  });
  it('hs a correct notification entity', function () {
    var notif = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    };
    expect(_notifications.normalizedData.entities.notifications["5debd7642e815cd350407777"]).toEqual(notif);
  });
});