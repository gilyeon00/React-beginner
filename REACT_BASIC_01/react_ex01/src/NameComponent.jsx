// rsc
import React, { Fragment } from 'react';

const NameComponent = () => {
    const name = "홍세원"
    const style = {
        color: '#0ff',
        backgroundColor: '#ffc'
    }

    return (
        <>
            <h1 style={{color: "#0ff", backgroundColor: "black"}}>정길연</h1>
            <h1 style={style}>{name}</h1>
            <h2 className='title'>LOVE</h2>
            {/* <h2>React</h2> */}
        </>
    );
};

export default NameComponent;

/* jsx
1. 여는 태그, 닫는 태그가 있어야됨 <h1> </h1>
    단독 태그 사용시에도 꼭 닫아주기 <Component/> <img />
2. jsx에서 js사용할 때는 {}로 묶어서 사용함
3. <h1 class="ggg" /> (X)
    <h1 className="ggg" /> (O)
4. 인라인으로 css작성 시, {}사용 style={{color: #fff;}}
    하지만 파일불러서 쓰는게 일반적 or 컴포넌트로 불러와서 사용
5. 주석도 {}로 사용 
*/