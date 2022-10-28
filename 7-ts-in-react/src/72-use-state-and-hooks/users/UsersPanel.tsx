import { useEffect, useState } from 'react';
import { User } from '../../71-simple-static-data/model/User';
import { usersService } from '../services/users.service';
import { SearchBox } from '../shared/SearchBox'
import { UsersPanelCard } from './UsersPanelCard'

export function UsersPanel() {

    // tutaj pobierz w odpowiedni sposób: usersService.getAll()
    const [users, setUsers] = useState<User[]>([]);
    const [nameFilter, setNameFilter] = useState('');

    useEffect(() => {
        usersService.getAll().then((users) => {
            setUsers(users)
        })
    }, [])

    const handleSearch = (text: string) => setNameFilter(text)
    const computedUsers = users.filter(u => u.name.toLowerCase().includes(nameFilter))

    return (
        <section className="columns is-multiline">
            <div className="column is-12">
                <SearchBox placeholder="Search user name..." onSearch={handleSearch} />
            </div>
            {
                computedUsers.map((user) =>
                    <div className="column is-3-widescreen is-4-desktop is-6-tablet is-12-mobile" key={user.id} >
                        <UsersPanelCard user={user} />
                    </div>
                )
            }
        </section>
    )
}
