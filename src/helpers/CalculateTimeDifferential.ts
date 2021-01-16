import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    
    /**/
    const timeDifferential = (calculateTimeBalance(timeMachine).year * 365 * 24) + (calculateTimeBalance(timeMachine).month * 30 * 24) + (calculateTimeBalance(timeMachine).day * 24)
    /**/

    return timeDifferential;
}

export default calculateTimeDifferential;
