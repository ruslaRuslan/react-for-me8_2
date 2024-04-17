import { useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";

const API_GITHUB_URL = "https://api.github.com/users/Ali-GreenHeart";

const GithubMain = () => {
  useEffect(() => {
    axios.get(API_GITHUB_URL)
  }, []);

  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" />
        <button>search</button>
      </div>
      <div className={styles.dataContainer}>
        <p>avatar_url</p>
        <p>html_url</p>
        <p>followers_url</p>
        <p>following_url</p>
        <p>repos_url</p>
        <p>name</p>
        <p>location</p>
        <p>bio</p>
        <p>followers(for count)</p>
      </div>
    </>
  );
};

export default GithubMain;
