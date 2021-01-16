import SpacePoint from "../../interfaces/SpacePoint";
import ITravelProvider from "../ITravelProvider";

class TravelProvider implements ITravelProvider{

    private universePosition:SpacePoint = {x:0,y:0,z:0};

    constructor(){
        this.universePosition.x = 294974.7536593868
        this.universePosition.y = 196602.30529170865
        this.universePosition.z = 705.6520697884043

        this.consoleLogWithTimeOut = this.consoleLogWithTimeOut.bind(this);
        this.executeTravel = this.executeTravel.bind(this);
        this.checkCoordinates = this.checkCoordinates.bind(this);
    }

    async executeTravel(universePosition:SpacePoint): Promise<void> {
        console.log("Verifying Coordinates...");
        if(this.checkCoordinates(universePosition, this.universePosition)){
            this.consoleLogWithTimeOut("Checking Space Time..", 1500);
            this.consoleLogWithTimeOut("Checking Time Balance..", 3000);
            this.consoleLogWithTimeOut("Checking Time Differential..", 4500);
            this.consoleLogWithTimeOut("All right for time travel\n\nSynchronizing pulsars", 6000);
            this.consoleLogWithTimeOut("In transit", 6500);

            this.consoleLogWithTimeOut("\n\n******* ALERT !!! BATTERY LOW 5% ********",9500);
            this.consoleLogWithTimeOut("******* ALERT !!! BATTERY LOW 4% ********",10000);
            this.consoleLogWithTimeOut("******* ALERT !!! BATTERY LOW 3% ********",10500);
            this.consoleLogWithTimeOut("******* ALERT !!! BATTERY LOW 2% ********",11000);
            this.consoleLogWithTimeOut("******* ALERT !!! BATTERY LOW 1% ********",11500);
            this.consoleLogWithTimeOut("******* ERROR IN TIME TRAVEL, STOP IN 333a.c ********",12500);
            this.consoleLogWithTimeOut("******* SHUT DOWN... ********",13000);

        }else{
            this.consoleLogWithTimeOut("Checking Space Time..", 1500);
            this.consoleLogWithTimeOut("Checking Time Balance..", 3000);
            this.consoleLogWithTimeOut("Checking Time Differential..", 4500);
            this.consoleLogWithTimeOut("All right for time travel\n\nSynchronizing pulsars", 6000);
            this.consoleLogWithTimeOut("You can't travel now, there are some errors in your time machine", 6500);
        }

    }

    private async consoleLogWithTimeOut(message:string, time:number){
        return new Promise(resolve => setTimeout(() => {  
            console.log(message); 
        }, time));
    }

    private checkCoordinates(coordinatesA:SpacePoint,coordinatesB:SpacePoint){
        if(
            coordinatesA.x === coordinatesB.x
            && coordinatesA.y === coordinatesB.y
            && coordinatesA.z === coordinatesB.z
        ){
            return true;
        }
        return false;
    }

}

export default TravelProvider;
