let applyItNTimes = (n) => (it) => {
    return (val) => {
        let res = val;
        for(let i=0; i < n; i++){
            res = it(res)
        }
        return res
    }
};

let itItNTimes = (n) => (it) => {
    for(let i=0; i < n; i++){
        it = it(it);
    }
    return it
};

let it = () => applyItNTimes(2);
const applyItALot = itItNTimes(2)(it);

const incIt = (it) => it + 1;
const result = applyItALot(incIt)(1);

console.log(result);
