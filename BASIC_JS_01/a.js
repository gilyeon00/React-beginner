const a = 100;
const b = 200;
const hi = "안녕하세요";

// export default : 한 개의 값만 내보낼 수 있음
//  모듈에서 import시 새로운 이름으로 받을 수 있음

// export {a, b, hi} : 여러개를 담아서 내보낼 수 있음
//  모듈에서 import시 이름을 일치시켜야함


export default a;
export {a, b, hi};
