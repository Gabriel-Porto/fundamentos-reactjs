import { Post } from "./components/Post/Post"
import { Header } from "./components/Header/Header"

import "./app.css"

export function App() {
  return (
    <div>
      <Header />
      <div>
        <aside></aside>
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
