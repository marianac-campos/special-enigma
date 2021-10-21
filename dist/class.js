"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public > protected > readonly > private
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.profile = function () {
        console.log("NOME: " + this.name + " | IDADE: " + this.age);
        console.log("NICKNAME: " + this.nickname + " | LEVEL: " + this.level);
    };
    Object.defineProperty(CharAccount.prototype, "getNickname", {
        get: function () {
            return this.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setNickname", {
        set: function (nickname) {
            this.nickname = nickname;
        },
        enumerable: true,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var player1 = new CharAccount("Isadora", 24, "aquasun", 87);
console.log(player1.profile());
// example using get
console.log(player1.getNickname);
// example using set
player1.setNickname = "SemChakraIrmao";
console.log(player1.profile());
