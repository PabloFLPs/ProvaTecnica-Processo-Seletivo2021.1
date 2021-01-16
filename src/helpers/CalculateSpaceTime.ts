import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => {
    
    /**/
    const spaceTime = Math.sqrt( Math.pow(calculateTimeBalance(timeMachine).year, 2) + Math.pow(calculateTimeBalance(timeMachine).month, 2) + Math.pow(calculateTimeBalance(timeMachine).day, 2) )
    /**/
    
    return spaceTime;
}

export default calculateSpaceTime;
