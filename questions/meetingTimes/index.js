/** Meeting Times **
 * 
 * Given an array of meeting times, determine if a person can
 * attend all meetings. 
 *  
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 * 
 */

 const meetingTimes = (times) => {
    times.sort((a, b) => a - b)
    
    for (let i = 1; i < times.length; i++) {
        let currArr = times[i]
        let prevArr = times[i-1]

        if (currArr[0] < prevArr[1]) {
            return false
        }
    }

    return true
 };

module.exports = meetingTimes;