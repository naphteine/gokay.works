import React from "react";
import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles["work"]}>
      <h3>{props.name}</h3>

      {props.tags.map((tag) => {
        return (
          <>
            <b>{tag}</b>
            <br />
          </>
        );
      })}

      <hr />

      <p>{props.about}</p>
    </div>
  );
};

export default Project;
