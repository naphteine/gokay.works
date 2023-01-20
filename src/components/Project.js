import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles["work"]}>
      <h3>{props.name}</h3>

      <em>
        {props.tags.map((tag) => {
          return (
            <span key={tag}>{tag}{" "}</span>
          );
        })}
      </em>

      <hr />

      <p>{props.about}</p>

      {props.link ?
        (<em><a href={props.link}>Link</a></em>)
        : (<></>)
      }

      {props.source ?
        (<>
          <br />
          <em><a href={props.source}>Source</a></em>
        </>)
        : (<></>)
      }
    </div>
  );
};

export default Project;
