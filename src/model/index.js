class Timer {
    static timerString(timer){
        let hour = Math.floor(timer / 3600).toString().padStart(2, "0");
        let minute = Math.floor((timer % 3600) / 60).toString().padStart(2, "0");;
        let second = Math.floor(timer % 60).toString().padStart(2, "0");;
        return `${hour} : ${minute} : ${second}`
    }

}
console.log(Timer.timerString(7200))