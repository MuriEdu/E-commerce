import styled from "styled-components";

export const TopMenu = styled.div`
    background-color: #5816B7;
    height: 60px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`

export const BtnMenu = styled.div`
    color: white;
    background-color: #5816B7;
    width: 80px;
    height: 45px;
    margin-right: 15px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {background-color: #390C7A}
`

export const styleLink = {
    color: 'white',
    textDecoration: 'none',
    width: 80,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}