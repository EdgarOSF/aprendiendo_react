import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export const App = () => {


    const users = [
        {
            'id': 1,
            'userName': 'midudev',
            'isFollowing': true,
            'name': 'Miguel Angel Duran'
        },
        {
            'id': 2,
            'userName': 's4vitar',
            'isFollowing': true,
            'name': 'Miguel Angel Duran'
        },
        {
            'id': 3,
            'userName': 'pheralb',
            'isFollowing': true,
            'name': 'Pablo Hernandez'
        },
        {
            'id': 4,
            'userName': 'grubby',
            'isFollowing': true,
            'name': 'Jhon Carpenter'
        },
        {
            'id': 5,
            'userName': 'omar',
            'isFollowing': false,
            'name': 'Edgar Omar Sanchez Farias'
        },
    ]


    return (
        <section className='App'>
            {users.map(({id, userName, isFollowing, name}) => {

                return (
                    <TwitterFollowCard key={id} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })}


        </section>
    )
}