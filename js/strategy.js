function Context(strategy) {
    this.exec = function () {
        strategy.exec();
        return strategy;
    }; 
}
function Strategy() {
    this.exec = function () { console.log('str'); };
}
function FHDStrategy() {
    Strategy.call(this);
    this.exec = function () {
    FHD();
    };
}
function Strategy1600() {
    Strategy.call(this);
    this.exec = function () {
        console.log('1600');
    };
}
function Strategy1200() {
    Strategy.call(this);
    this.exec = function () {
        console.log('1200');
    };
}
function Strategy1024() {
    Strategy.call(this);
    this.exec = function () {
        console.log('1024');
    };
}
function StrategyMobile() {
    Strategy.call(this);
    this.exec = function () {
        console.log('Mobile');
    };
}
///////////////Your implemetation
function FHD()
{
    console.log('FHD');
}