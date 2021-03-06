var changeState = (function () {
    var state = 0,
        lamps = ["Red", "Yellow", "Green"],
        lampsLength = lamps.length,
        order = [
            [5000, "Red"],
            [3000, "Red", "Yellow"],
            [5000, "Green"],
            [3000, "Yellow"]
        ],
        orderLength = order.length,
        lampIndex,
        orderIndex,
        sId;

    return function (stop) {
        if (stop) {
            clearTimeout(sId);
            return;
        }

        var lamp,
        lampDOM;

        for (lampIndex = 0; lampIndex < lampsLength; lampIndex += 1) {
            lamp = lamps[lampIndex];
            lampDOM = document.getElementById(lamp);
            if (order[state].indexOf(lamp) !== -1) {
                lampDOM.classList.add("lamp" + lamp);
            } else {
                lampDOM.classList.remove("lamp" + lamp);
            }
        }

        sId = setTimeout(changeState, order[state][0]);
        state += 1;
        if (state >= orderLength) {
            state = 0;
        }
    };
}());

document.getElementById("trafficLight").addEventListener("click", (function () {
    var state = false;
    
    return function () {
        changeState(state);
        state = !state;
    };
}()), false);