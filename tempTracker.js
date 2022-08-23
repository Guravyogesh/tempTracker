class TempTracker {
    constructor() {
        //  min and max value
        this.minTemp = null;
        this.maxTemp = null;

        //  mode value
        this.value = new Array(150).fill(0);
        this.maxvalue = 0;
        this.mode = null;

        //  mean value
        this.numberOfValues = 0;
        this.totalSum = 0;
        this.mean = null;
    }

    insert(temperatureValue) {

        //  min and max calculation 
        if (this.maxTemp === null || temperatureValue > this.maxTemp) {
            this.maxTemp = temperatureValue
        }
        if (this.minTemp === null || temperatureValue < this.minTemp) {
            this.minTemp = temperatureValue;
        }

        //  mode calculation
        this.value[temperatureValue]++;
        if (this.value[temperatureValue] > this.maxvalue) {
            this.mode = temperatureValue;
            this.maxvalue = this.value[temperatureValue];
        }

        //  mean calculation 
        this.numberOfValues++;
        this.totalSum += temperatureValue;
        this.mean = this.totalSum / this.numberOfValues;


    }
    //  Return Max value
    get_max() {
        return this.maxTemp;
    }
    //  Return Min value
    get_min() {
        return this.minTemp;
    }
    //  Return Mean value
    get_mean() {
        return this.mean;
    }
    //  Return Mode value
    get_mode() {
        return this.mode;
    }
}

//Insert value for calculating output
var temp = new TempTracker();
temp.insert(12);
temp.insert(37);
temp.insert(18);
temp.insert(80);
temp.insert(80);

// Showing output values
console.log('Min', temp.get_min());
console.log('Max', temp.get_max());
console.log('Mean', temp.get_mean());
console.log('Mode', temp.get_mode());
