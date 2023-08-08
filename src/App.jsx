import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Porto"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse, vero magni quasi velit totam numquam at pariatur quia porro error voluptas quis, eveniet provident obcaecati accusantium. Deleniti, cumque."
          />
          <Post
            author="Gabriel Porto"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse, vero magni quasi velit totam numquam at pariatur quia porro error voluptas quis, eveniet provident obcaecati accusantium. Deleniti, cumque."
          />
        </main>
      </div>
    </div>
  )
}
