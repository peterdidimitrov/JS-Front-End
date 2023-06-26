function checkSpeeding(speed, area) {
    // let isItFaster = false;
    // let speedLimit = 0;
    // switch (area) {
    //     case 'motorway':
    //         speedLimit = 130;
    //         break;
    //     case 'interstate':
    //         speedLimit = 90;
    //         break;
    //     case 'city':
    //         speedLimit = 50;
    //         break;
    //     case 'residential':
    //         speedLimit = 20;
    //         break;
    //     default:
    //         break;
    // }
    // if (speed > speedLimit) {
    //     let status = '';
    //     let difference = speed - speedLimit;
    //     if (difference <= 20) {
    //         status = 'speeding';
    //     }else if (difference > 20 && difference <= 40) {
    //         status = 'excessive speeding';
    //     } else {
    //         status = 'reckless driving';
    //     }

    //     console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    // } else {
    //     console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    // }

    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const currentSpeedLimit = speedLimits[area];
    const speedOverLimit = speed - currentSpeedLimit;

    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    }

    const speedingMessage = 
        speedOverLimit <= 20 
            ? 'speeding'
            : speedOverLimit <= 40
            ? 'excessive speeding'
            : 'reckless driving';

    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedingMessage} - ${speedingMessage}`);
}
checkSpeeding(200, 'motorway');