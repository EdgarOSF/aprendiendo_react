import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export const App = () => {


    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="vxnder">
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}