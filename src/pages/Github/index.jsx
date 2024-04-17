import { useEffect, useState } from "react";
import styles from "./index.module.css";
import axios from "axios";

const API_GITHUB_URL = "https://api.github.com/users/Ali-GreenHeart";

const GithubMain = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(API_GITHUB_URL).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" />
        <button>search</button>
      </div>
      <div className={styles.dataContainer}>
        <p><b>Name:</b>{data.name}</p>
        <p><b>Bio:</b>{data.bio}</p>
        <p><b>Location:</b>{data.location}</p>
        <p><b>Follower count:</b>{data.followers} <a href={data.followers_url}>link</a></p>
        <p><b></b><img style={{with:150, height: 150}} src={data.avatar_url} alt="" /></p>
        <p></p>
        <p><b>to account:</b>{data.html_url}</p>
        <p><b>to repos:</b>{data.repos_url}</p>
        <p>{data.bio}</p>
      </div>
    </>
  );
};

export default GithubMain;
