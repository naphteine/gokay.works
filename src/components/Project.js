import React from 'react';

const Project = props => {
    return (
        <div className='work'>
            <h3>{props.name}</h3>

            <hr />

            {props.tags.map((t) => {
                <b>{t.name}</b>
            })}

            <hr />

            <p>{props.about}</p>
        </div>
    )
}

export default Project;