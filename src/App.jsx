import { useState } from 'react'


export default function App() {
const [likes, setLikes] = useState(0)
const [comments, setComments] = useState([])
const [text, setText] = useState('')


const addComment = () => {
if (!text.trim()) return
setComments([{ text, time: new Date().toLocaleString() }, ...comments])
setText('')
}


return (
<div className="container">
<h1>🌙 DarkBlog</h1>


<div className="card">
<h2>文章標題</h2>
<p>這是一個使用 React 製作的暗色圓角部落格。</p>


<div className="actions">
<button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
<button onClick={() => navigator.share?.({ title: 'DarkBlog', url: location.href })}>📤 分享</button>
</div>
</div>


<div className="card">
<h3>💬 留言</h3>
<textarea value={text} onChange={e => setText(e.target.value)} />
<button onClick={addComment}>送出</button>


{comments.map((c, i) => (
<div key={i} className="comment">
{c.text}
<div className="time">{c.time}</div>
</div>
))}
</div>
</div>
)
}