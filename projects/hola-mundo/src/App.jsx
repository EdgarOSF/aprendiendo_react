import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez" />
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing userName="vxnder" name="Vanderhart" />
        </section>
    )
}