import styles from "./index.module.css";
const GithubMain = () => {
  return (
    <>
      <div className={styles.inputContainer}>
        <input type="text" />
        <button>search</button>
      </div>
      <div>
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
