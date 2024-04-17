import { useEffect, useState } from "react";
import styles from "./index.module.css";
import axios from "axios";

const API_GITHUB_URL = "https://api.github.com/users/Ali-GreenHeart";

async function getData(username) {

 await axios.get(API_GITHUB_URL).then(({ data }) => {
    setData(data);
  });
}

const GithubMain = () => {
const [data, setData] = useState({});
const [username, setUsername] = useState('')


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
        <p><b>Follower count:</b>{data.followers} <a target='blank' href={data.followers_url}>link</a></p>
        <p><b>Image:</b><img style={{with:150, height: 150}} src={data.avatar_url} alt="" /></p>
        <p><b>to account:</b><a target='blank' href={data.html_url}>link</a></p>
        <p><b>to repos:</b><a target='blank' href={data.repos_url}>link</a></p>
      </div>
    </>
  );
};

export default GithubMain;
