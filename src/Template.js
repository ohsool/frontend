import React, { useEffect, useState } from "react";
import styled from "styled-components";
// 같은 폴더안에 있는 컴포넌트 임포트 할때는 묶어서 (자주 쓰이는 컴포넌트들만 페이지는 제외)
//document 쓰지말고 ref나 usestate쓰기
//console찍을때 console.log("상황 정확히 명시", data)
//import 순서 React => styled => react-redux, dispatch => component(제일 후순위)
const Template = (props) => {        //props 받아오는 데이터 주석으로 적어놓기
    const [aaaa, setAaaa] = useState({
        user_id: "",
        user_pwd: "",

    });
    const [user_info, setUser_Info ] = useState();
    const a = useSelector((state) => state.aaa);  //useState => useSelector 순서

    useEffect(() => {

    }, []);   // 최초 마운트시 진행되는 useEffect

    useEffect(() => {
        socket.on("qwe", (data)=> {
            
        })
    }, [socket]);  //값 바뀔때마다 진행되는 useEffect
                    // 리액트 훅 함수들 맨위로 useEffect => useCallback => useMemo
    const aa = () => {

    }    //함수들 

    const {user_id, user_pwd} = user_info;
    
    const {user_id, user_pwd} = user_info;
    
    const onChange = (e) => {
        setUser_Info({...user_info, 
            [e.target.name]: e.target.value,
        });
    } //input상태관리를 return 바로 위에

    return (
        <React.Fragment>
            <AA></AA>
            <input name="user_id" value={user_id} onChange={onChange}></input>
            <input name="user_pwd" value={user_pwd} onChange={onChange}></input>
        </React.Fragment>
    )
}


Template.defaultProps={

};


export default Template;


const AA = styled.div`

`;