const reachDestination = (distance, speed) => {

    const time = distance / speed

const roundedTime = Math.round(time * 4) / 4;

const hours = Math.floor(roundedTime);         
const minutes = Math.round((roundedTime - hours) * 60)

    const result = "I should be there in " + hours + " hours " + minutes + " minutes.";

    return result 

};

module.exports = reachDestination
