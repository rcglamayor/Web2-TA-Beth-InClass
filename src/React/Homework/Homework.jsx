import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx'

const Homework = () => {
    return (
        <HomeworkStyled>
            <h2>Homework</h2>
            <Essays essays={ essays }/>
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div `
    padding: 20px;
    border: dashed teal 5px;
    background-color: #ccc;
`;

const essays = [
    {
        title: 'Q1',
        question: 'Question 1 goes here',
        AnswerComponent: () => {
            return (
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores soluta maxime sapiente suscipit similique consequuntur beatae quo reiciendis repudiandae perferendis excepturi earum dignissimos quam esse et tempore voluptatem, autem nostrum!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores soluta maxime sapiente suscipit similique consequuntur beatae quo reiciendis repudiandae perferendis excepturi earum dignissimos quam esse et tempore voluptatem, autem nostrum!</p>
                </div>
            );
        }
    },
    {
        title: 'Q2',
        question: 'Question 2 goes here.',
        AnswerComponent: () => {
            return (
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores soluta maxime sapiente suscipit similique consequuntur beatae quo reiciendis repudiandae perferendis excepturi earum dignissimos quam esse et tempore voluptatem, autem nostrum!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores soluta maxime sapiente suscipit similique consequuntur beatae quo reiciendis repudiandae perferendis excepturi earum dignissimos quam esse et tempore voluptatem, autem nostrum!</p>
                </div>
            );
        }
    }
];