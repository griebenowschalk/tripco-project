import { MouseEvent, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteQuestion, showAnswer } from '@/redux/slices/questionsSlice';
import { strings } from '@/localisation/strings';
import { Question } from '@/models/question';

import './styles.scss';

export const QuestionList = ({ questions }: { questions: Question[] }) => {
    const dispatch = useDispatch();
    const isEmpty = useMemo(() => questions.length == 0, [questions]);

    const handleDeleteClick = (event: MouseEvent<unknown>, index: number) => {
        event.stopPropagation();
        dispatch(deleteQuestion({ index: index }));
    };

    const emptyTemplate = (
        <div className="empty-card">
            <b>{strings.no_questions_yet}</b>
        </div>
    );

    const listTemplate = questions.map((q, i) => (
        <div
            key={q.id}
            onClick={() => dispatch(showAnswer(q))}
            className="question"
        >
            <div className="question-text">
                <b>{q.question}</b>
                {q.isVisible ? <div>{q.answer}</div> : <></>}
            </div>
            <button
                className="question-delete"
                onClick={(e) => handleDeleteClick(e, i)}
            >
                x
            </button>
        </div>
    ));

    return (
        <div className="question-list">
            {isEmpty ? emptyTemplate : listTemplate}
        </div>
    );
};
