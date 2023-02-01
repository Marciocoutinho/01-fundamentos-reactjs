import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

// author: { avatar_url: " ", name: " ", role: " "}
// publishedAt: date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/37118043?v=4",
      name: "Marcio Coutinho",
      role: "CTO @cybertydo"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcare' },      
    ],
    publishedAt: new Date('2023-01-12 08:57:09'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/1149845?v=4",
      name: "Ganriel Buzi",
      role: "Educator @cybertydo"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcare' },      
    ],
    publishedAt: new Date('2023-01-11 08:57:09'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(posts => {
          return (
            <Post 
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}           
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}

