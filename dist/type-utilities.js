"use strict";
// Readonly<T>
// Partial<T>
// Pick<T, K 'extends keyof T'>
// Omit<T, K 'extends keyof T'>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var watch = {
    title: "Attack on Titan",
    description: "Maratonar o anime novamente ate a temporada final",
    completed: false,
};
console.log(watch);
// watch.completed = true;
function updateToDo(toDo, fieldsToUpdate) {
    return __assign(__assign({}, toDo), fieldsToUpdate); // spread operator '...'
}
var doneWatch = updateToDo(watch, { completed: true });
console.log(doneWatch);
console.log("===============================================");
var play = {
    description: "Terminar a season no Diamond V",
    completed: false,
};
console.log(play);
console.log("===============================================");
var read = {
    title: "Ler 'A Transcedencia do Ego''",
    completed: true,
};
console.log(read);
