import React from 'react';
import styled from 'styled-components';

const Pagenation = ({total, page, setPage, LIST_PER_PAGE}) => {

    const pageNum = Math.ceil(total / LIST_PER_PAGE)
    const pageNumArray = new Array(pageNum);

    return (
        <PagenatioBox>
            <PreviewBtn onClick={()=> setPage(page-1)} disabled={page===1}> 이전 </PreviewBtn>
            {
                pageNumArray.fill().map( (ele,idx) => {
                    return (
                        <PageNumButton key={idx} 
                            onClick={() => setPage(idx+1)}
                            className={page===idx+1 && "active"}>
                            {idx+1}
                        </PageNumButton>
                    )
                })
            }
            <NextBtn onClick={()=> setPage(page+1)} disabled={page===pageNum} > 이후 </NextBtn>
        </PagenatioBox>
        
    );
};

export default Pagenation;

const PagenatioBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 1rem;
`

const PageNumButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.375rem;
    color: #fff;
    color: #cda8a8;
    width: 30px;
    height: 24px;
    font-size: 0.6rem;
    &:hover{
        cursor: pointer;
        background-color: #cda;
    }
    $[disabled]{
        background: #e0e0e0;
        color: #fff
    }
    $[active]{
        font-weight: bold;
        color:#f94;
    }
`

const NextBtn = styled(PageNumButton)``
const PreviewBtn = styled(PageNumButton)``
